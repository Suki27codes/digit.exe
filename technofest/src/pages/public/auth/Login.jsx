import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { supabase } from "../../../lib/supabase";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import PublicLayout from "../../../components/layout/PublicLayout";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? null;

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: formData.email.trim(),
      password: formData.password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    // Redirect to the page the user was trying to visit, or their role dashboard
    const role = data.user?.user_metadata?.role;
    const dashboardMap = {
      student: "/student",
      mentor: "/mentor",
      admin: "/admin",
      organization: "/organization",
    };

    const destination = from ?? dashboardMap[role] ?? "/";
    navigate(destination, { replace: true });
  };

  return (
    <PublicLayout>
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-maroon-700">
              Welcome back
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Log in</h1>
          </div>

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-maroon-700 focus:ring-maroon-500"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-medium text-maroon-700 hover:text-maroon-900"
              >
                Forgot password?
              </Link>
            </div>

            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-maroon-700 hover:text-maroon-900"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
