import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'role', 'portfolioUrl', 'jobId'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Prepare the payload for webhook
    const webhookPayload = {
      // Application data
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      role: body.role,
      portfolioUrl: body.portfolioUrl,
      experience: body.experience,
      availability: body.availability,
      location: body.location,
      introduction: body.introduction,
      equipment: body.equipment || [],
      
      // Job metadata
      jobId: body.jobId,
      jobSlug: body.jobSlug,
      
      // Submission metadata
      submittedAt: body.submittedAt,
      userAgent: request.headers.get('user-agent'),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown',
      
      // Form metadata
      source: 'career-application-form',
      website: 'marketmy.properties',
    };

    // Send to webhook endpoint
    const webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.site/your-webhook-id';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'MarketMyProperties/1.0',
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', await webhookResponse.text());
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    // Log successful submission (optional)
    console.log(`Application submitted for ${body.role} by ${body.fullName} (${body.email})`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        submissionId: `app_${Date.now()}_${body.jobSlug}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}