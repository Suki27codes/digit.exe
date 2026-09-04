import { Link } from "react-router-dom";
import { ArrowRight, LifeBuoy } from "lucide-react";
import PublicLayout from "../../components/layout/PublicLayout";
import Button from "../../components/ui/Button";

export default function Contact() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact us</h1>
          <p className="mt-1 text-sm text-gray-500">
            Reach the Innoject team for platform and event support.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-maroon-200 text-maroon-700">
                <LifeBuoy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Platform support</h3>
                <p className="mt-1 text-sm text-gray-500">
                  For sign-in, profile, or submission questions, contact support@innoject.example.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-maroon-200 text-maroon-700">
                <LifeBuoy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Event enquiries</h3>
                <p className="mt-1 text-sm text-gray-500">
                  For event details and partnerships, contact events@innoject.example.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-base font-semibold text-gray-900">Quick actions</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/faq">
              <Button size="sm" className="flex items-center gap-2">
                Read FAQs <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
