"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseStudyById, type CaseStudyData } from "@/lib/case-study-data";
import { Card, CardContent } from "@/components/ui";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      const study = getCaseStudyById(params.id as string);
      if (study) {
        setCaseStudy(study);
      } else {
        setError("Case study not found");
      }
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardContent className="pt-8">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Case Study Not Found
              </h1>
              <p className="text-gray-600 mb-6">
                The case study you're looking for doesn't exist or has been
                moved.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Gallery
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}


