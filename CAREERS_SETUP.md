# Careers Section Setup Guide

## Overview
The careers section has been successfully implemented with the following features:
- Main careers listing page at `/company/careers`
- Dynamic job detail pages (e.g., `/company/careers/photographer`)
- Comprehensive job application form with Zod validation
- Webhook integration for form submissions
- Responsive design with shadcn/ui components

## Environment Variables

To enable form submissions, you need to set up the following environment variable:

```bash
# Add to your .env.local file
WEBHOOK_URL=https://your-webhook-endpoint.com/careers-applications
```

### Webhook Setup Options

1. **Zapier**: Create a Zapier webhook to send applications to your preferred destination
2. **Make.com**: Use Make.com's webhook functionality
3. **Custom API**: Set up your own API endpoint to handle applications
4. **Email Service**: Use services like Formspree or Netlify Forms

## Webhook Payload Structure

The webhook will receive the following data structure:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "role": "Freelance Photographer",
  "portfolioUrl": "https://johndoe.com",
  "experience": "3-5",
  "availability": "immediate",
  "location": "New York, NY (EST)",
  "introduction": "Brief introduction text...",
  "equipment": ["Professional DSLR camera", "Wide-angle lens"],
  "jobId": "photographer-remote",
  "jobSlug": "photographer",
  "submittedAt": "2025-01-15T10:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1",
  "source": "career-application-form",
  "website": "marketmy.properties"
}
```

## Available Job Pages

The following job pages are available:
- `/company/careers/photographer` - Freelance Photographer
- `/company/careers/interior-designer` - Freelance Interior Designer
- `/company/careers/3d-artist` - Freelance 3D Artist
- `/company/careers/videographer` - Freelance Videographer

## File Structure

```
app/
├── company/
│   └── careers/
│       ├── page.tsx                    # Main careers listing
│       ├── [slug]/
│       │   └── page.tsx               # Dynamic job detail pages
│       └── components/
│           └── JobApplicationForm.tsx  # Shared application form
├── data/
│   └── jobs.json                      # Job data
└── api/
    └── applications/
        └── route.ts                   # API endpoint for form submissions
```

## Testing

1. Visit `/company/careers` to see the main careers page
2. Click on any job to view the detailed job page
3. Fill out the application form to test the submission flow
4. Check your webhook endpoint to verify data is being received

## Customization

### Adding New Jobs
Edit `app/data/jobs.json` to add new job listings. The system will automatically generate new pages based on the slug field.

### Modifying Form Fields
Edit `app/company/careers/components/JobApplicationForm.tsx` to add or modify form fields and validation.

### Styling
The careers section uses the same design system as the rest of the site (stone colors, consistent typography, shadcn/ui components).

## Production Deployment

Before deploying to production:

1. Set up your webhook endpoint
2. Configure the `WEBHOOK_URL` environment variable
3. Test the form submission flow
4. Monitor webhook deliverability
5. Set up error handling/logging for failed submissions

## Support

If you need help with webhook setup or customization, please refer to the documentation of your chosen webhook service or contact your development team.