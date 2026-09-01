import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../../lib/supabase";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import PublicLayout from "../../../components/layout/PublicLayout";

const ROLES = [
  { value: "student", label: "Student" },
  { value: "mentor", label: "Mentor / Academic" },
  { value: "organization", label: "Organisation / Industry" },
];

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student",
    institution: "",
    course: "",
    yearLevel: "",
    phone: "",
    agreeTerms: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.agreeTerms) {
      setError("You must agree to the terms to continue.");
      return;
    }

    setLoading(true);

    const { error: authError } = await supabase.auth.signUp({
      email: formData.email.trim(),
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName.trim(),
          role: formData.role,
          institution: formData.institution.trim(),
          course: formData.course.trim(),
          year_level: formData.yearLevel.trim(),
          phone: formData.phone.trim(),
        },
      },
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    // Show confirmation message (Supabase sends a confirmation email by default)
    setSuccess(true);
  };

  if (success) {
    return (
      <PublicLayout>
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
          <div className="w-full max-w-md rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Check your email</h2>
            <p className="mt-3 text-sm text-gray-600">
              We sent a confirmation link to <strong>{formData.email}</strong>.
              Click the link to activate your account, then{" "}
              <Link to="/login" className="font-semibold text-maroon-700 hover:underline">
                log in
              </Link>
              .
            </p>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
            <p className="mt-1 text-sm text-gray-500">
              Join Innoject to showcase your innovation.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account type <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
              >
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <Input
              label="Full name"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Institution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution
              </label>
              <input
                name="institution"
                type="text"
                placeholder="Your institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <input
                name="course"
                type="text"
                placeholder="Your programme or course"
                value={formData.course}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
              />
            </div>

            {/* Year Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year level
              </label>
              <input
                name="yearLevel"
                type="text"
                placeholder="e.g. 2"
                value={formData.yearLevel}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-100"
              />
            </div>

            {/* Password */}
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password (min 6 chars)"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-maroon-700 focus:ring-maroon-500"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="font-semibold text-maroon-700 hover:underline">
                  terms
                </Link>{" "}
                and understand how my information will be used.
              </label>
            </div>

            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Creating account…" : "Create account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-maroon-700 hover:text-maroon-900"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
