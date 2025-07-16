import { Metadata } from "next";
import { Suspense } from "react";
import React from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  Home,
  Video,
  Palette,
  MapPin,
  Clock,
  Euro,
  CheckCircle,
  Users,
  Briefcase,
} from "lucide-react";
import Breadcrumbs from "@/app/(shared)/Breadcrumbs";
import JobApplicationForm from "../components/JobApplicationForm";
import jobsData from "@/app/data/jobs.json";

type Job = {
  id: string;
  title: string;
  slug: string;
  category: string;
  type: string;
  location: string;
  department: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  compensation: {
    type: string;
    range: string;
    details: string;
  };
  equipment: string[];
  availability: string;
  applicationProcess: string[];
  tags: string[];
  isActive: boolean;
  publishedDate: string;
  lastUpdated: string;
};

interface JobPageProps {
  params: {
    slug: string;
  };
}

function JobOverview({ job }: { job: Job }) {
  const Icon = iconMap[job.slug as keyof typeof iconMap] || Camera;
  const colorClass =
    colorMap[job.slug as keyof typeof colorMap] || "bg-gray-100 text-gray-800";

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${colorClass}`}>
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <CardTitle className="text-2xl text-stone-900">
              {job.title}
            </CardTitle>
            <p className="text-stone-600">{job.department}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-stone-400" />
            <span className="text-stone-600">{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-stone-400" />
            <span className="text-stone-600">{job.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Euro className="h-5 w-5 text-stone-400" />
            <span className="text-stone-600">{job.compensation.range}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface ListSectionProps {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
}

function ListSection({ title, items, icon: Icon }: ListSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-stone-900 mb-3 flex items-center space-x-2">
        <Icon className="h-5 w-5 text-stone-600" />
        <span>{title}</span>
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-stone-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  return jobsData.jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const job = jobsData.jobs.find((j) => j.slug === params.slug);

  if (!job) {
    return {
      title: "Job Not Found | Market My Properties",
      description: "The job you're looking for could not be found.",
    };
  }

  return {
    title: `${job.title} - Remote Freelance Position | Market My Properties`,
    description: `${job.overview.substring(0, 150)}...`,
    keywords: job.tags.join(", "),
    openGraph: {
      title: `${job.title} - Remote Freelance Position`,
      description: job.overview,
      type: "article",
    },
  };
}

export default function JobDetailPage({ params }: JobPageProps) {
  const job = jobsData.jobs.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Company", href: "" },
    { label: "Careers", href: "/company/careers" },
    {
      label: job.title,
      href: `/company/careers/${job.slug}`,
      color: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col text-center items-start justify-start px-10 mx-auto text-left max-w-4xl pb-24 antialiased">
        <Breadcrumbs content={breadcrumbs} />

        <div className="mb-12 mt-8">
          <JobOverview job={job} />

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-stone-900">
                About This Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{job.overview}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ListSection
              title="Key Responsibilities"
              items={job.responsibilities}
              icon={CheckCircle}
            />

            <ListSection
              title="Requirements"
              items={job.requirements}
              icon={Users}
            />

            <ListSection
              title="Required Skills"
              items={job.skills}
              icon={Briefcase}
            />
          </div>

          <div>
            <ListSection
              title="What We Offer"
              items={job.benefits}
              icon={CheckCircle}
            />

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-stone-900 mb-3 flex items-center space-x-2">
                <Euro className="h-5 w-5 text-stone-600" />
                <span>Compensation</span>
              </h3>
              <Card className="bg-stone-50">
                <CardContent className="p-4">
                  <div className="text-lg font-semibold text-stone-900 mb-2">
                    {job.compensation.range} per{" "}
                    {job.compensation.type.toLowerCase()}
                  </div>
                  <p className="text-stone-600 text-sm">
                    {job.compensation.details}
                  </p>
                </CardContent>
              </Card>
            </div>

            <ListSection
              title="Equipment & Tools"
              items={job.equipment}
              icon={Briefcase}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-stone-900 mb-3 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-stone-600" />
            <span>Application Process</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {job.applicationProcess.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-stone-600 text-sm">{step}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div id="apply" className="mb-6">
          <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">
            Apply for This Position
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Ready to join our creative team? Fill out the application form below
            and we&apos;ll get back to you within 24 hours.
          </p>
          <JobApplicationForm job={job} />
        </div>
      </div>
    </Suspense>
  );
}
