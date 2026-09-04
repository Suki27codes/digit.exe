import PublicLayout from "../../components/layout/PublicLayout";

export default function Terms() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-1 text-sm text-gray-500">
          Terms and conditions governing the use of Innoject.
        </p>

        <div className="mt-8 prose prose-sm max-w-3xl text-gray-600 space-y-4">
          <p>
            By using Innoject, you agree to comply with and be bound by the following terms of service.
            Please review them carefully.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">Content Guidelines</h2>
          <p>
            All project submissions must be original work. You retain ownership of your content,
            but grant Innoject a non-exclusive licence to display it on the platform.
          </p>
          <h2 className="text-lg font-semibold text-gray-900">Platform Usage</h2>
          <p>
            Innoject is intended for educational and innovation purposes.
            Any misuse of the platform may result in account suspension or termination.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
