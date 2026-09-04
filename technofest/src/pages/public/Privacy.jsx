import PublicLayout from "../../components/layout/PublicLayout";

export default function Privacy() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-1 text-sm text-gray-500">
          Our commitment to protecting your privacy and personal data.
        </p>

        <div className="mt-8 prose prose-sm max-w-3xl text-gray-600 space-y-4">
          <p>
            Innoject is committed to protecting the personal information of all users.
            This privacy policy outlines how we collect, use, and safeguard your data.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">Information We Collect</h2>
          <p>
            We collect information you provide during registration, including your name, email address,
            institution, course details, and contact information. We may also collect usage data to improve
            the platform experience.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">How We Use Your Information</h2>
          <p>
            Your information is used to manage your account, facilitate project showcases,
            connect you with mentors and organizations, and improve our services.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
