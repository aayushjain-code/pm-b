import { Shield, Lock, Eye, FileText, Users, Database } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p>
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Fill out our contact forms</li>
                  <li>Request quotes or consultations</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="mt-2">
                  This may include your name, email address, phone number,
                  company name, and project details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Technical Information
                </h3>
                <p>
                  We automatically collect certain information when you visit
                  our website, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system details</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide and improve our 3D laser scanning services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you project updates and relevant information</li>
                <li>Process quotes and service requests</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Information Sharing
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>With your explicit consent for specific purposes</li>
                <li>
                  With trusted service providers who assist us in operating our
                  business
                </li>
                <li>
                  When required by law or to protect our rights and safety
                </li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Data Security
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Rights
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability for information you provided</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the
                information provided in the Contact section below.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We use cookies and similar technologies to enhance your browsing
                experience, analyze site traffic, and personalize content. You
                can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <p>
                <strong>Email:</strong> privacy@praman3d.com
              </p>
              <p>
                <strong>Phone:</strong> +91 XXX XXX XXXX
              </p>
              <p>
                <strong>Address:</strong> India & Australia
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Policy Updates
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically for
                any changes.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
