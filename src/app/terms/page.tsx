import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  Shield,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Scale className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Acceptance of Terms
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using Praman 3D's website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Services Description
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Praman 3D provides professional 3D laser scanning and digital
                documentation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>3D Laser Scanning & Point Clouds</li>
                <li>LiDAR Data Processing</li>
                <li>3D CAD Modelling</li>
                <li>3D BIM Modelling</li>
                <li>Plant Modelling</li>
                <li>VR & AR Services</li>
                <li>Heritage Conservation</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                User Responsibilities
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Provide accurate and complete information when requesting
                  services
                </li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>
                  Not use our services for any unlawful or prohibited purpose
                </li>
                <li>Maintain the confidentiality of any login credentials</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>
            </div>
          </section>

          {/* Service Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Service Terms
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Project Scope and Deliverables
                </h3>
                <p>
                  All project scopes, deliverables, timelines, and costs will be
                  clearly defined in written proposals or contracts. Any changes
                  to the scope must be agreed upon in writing by both parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Payment Terms
                </h3>
                <p>
                  Payment terms will be specified in individual project
                  agreements. Generally, we require:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>50% advance payment before project commencement</li>
                  <li>Balance payment upon project completion and delivery</li>
                  <li>Payment within 30 days of invoice date</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Data Ownership and Usage Rights
                </h3>
                <p>
                  Upon full payment, clients will own the final deliverables and
                  have the right to use them for their intended purposes. Raw
                  scan data and intermediate files remain the property of Praman
                  3D unless otherwise specified in the project agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Limitation of Liability
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                To the maximum extent permitted by law, Praman 3D shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from
                your use of our services.
              </p>
              <p>
                Our total liability for any claims arising from or related to
                our services shall not exceed the total amount paid by you for
                the specific services giving rise to the claim.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                All content, trademarks, service marks, and other intellectual
                property on our website and in our services are the property of
                Praman 3D or our licensors. You may not use, reproduce, or
                distribute any content without our written permission.
              </p>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Privacy and Data Protection
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Your privacy is important to us. Our collection and use of
                personal information is governed by our Privacy Policy, which is
                incorporated into these Terms by reference.
              </p>
              <p>
                We implement appropriate security measures to protect your data
                and comply with applicable data protection laws.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Termination
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the
                Terms.
              </p>
              <p>
                Upon termination, your right to use the service will cease
                immediately. All provisions of the Terms which by their nature
                should survive termination shall survive termination.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Governing Law
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms shall be interpreted and governed by the laws of
                India, without regard to its conflict of law provisions. Any
                disputes arising from these Terms shall be subject to the
                exclusive jurisdiction of the courts in India.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>
              <p>
                By continuing to access or use our service after those revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <p>
                <strong>Email:</strong> legal@praman3d.com
              </p>
              <p>
                <strong>Phone:</strong> +91 XXX XXX XXXX
              </p>
              <p>
                <strong>Address:</strong> India & Australia
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

