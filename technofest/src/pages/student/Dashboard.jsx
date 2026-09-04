import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderKanban, Plus, GraduationCap, Handshake, Bell,
  ArrowRight, CheckCircle2, Clock, FileText,
} from "lucide-react";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export default function StudentDashboard() {
  const { user, displayName } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, category, summary, stage, status")
        .eq("student_id", user.id)
        .order("created_at", { ascending: false });

      if (!error && data) setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, [user.id]);

  const approvedCount = projects.filter((p) => p.status === "approved").length;
  const pendingCount  = projects.filter((p) => p.status === "pending").length;

  return (
    <div className="space-y-8 pb-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#800000] via-[#990000] to-[#660000] p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md mb-2">
              Student Workspace
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Welcome back, {displayName}!
            </h1>
            <p className="mt-2 text-maroon-100 max-w-xl text-sm leading-relaxed">
              {user.email}
            </p>
          </div>
          <Link to="/student/projects/new">
            <Button variant="secondary" className="shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Create New Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">My Projects</p>
              <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
                {loading ? "—" : projects.length}
              </h3>
            </div>
            <div className="rounded-xl bg-maroon-50 p-3 text-maroon-700">
              <FolderKanban className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Approved</p>
              <h3 className="mt-2 text-3xl font-extrabold text-green-600">
                {loading ? "—" : approvedCount}
              </h3>
            </div>
            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Pending Review</p>
              <h3 className="mt-2 text-3xl font-extrabold text-amber-600">
                {loading ? "—" : pendingCount}
              </h3>
            </div>
            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Active Submissions</h2>
          <Link
            to="/student/projects"
            className="text-sm font-semibold text-[#800000] hover:underline flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#800000] border-t-transparent" />
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <FolderKanban className="mx-auto h-10 w-10 text-gray-300 mb-3" />
            <p className="text-sm font-medium text-gray-500">No projects yet.</p>
            <Link to="/student/projects/new" className="mt-3 inline-block text-sm font-semibold text-[#800000] hover:underline">
              Create your first project →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-maroon-50 px-3 py-1 text-xs font-semibold text-[#800000]">
                    {project.category}
                  </span>
                  <Badge
                    type={
                      project.status === "approved" ? "success"
                      : project.status === "pending" ? "warning"
                      : "default"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{project.summary}</p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FileText className="h-4 w-4" />
                    Stage: <span className="font-semibold text-gray-700">{project.stage}</span>
                  </div>
                  <Link to={`/student/projects/${project.id}`}>
                    <Button variant="outline" className="text-xs px-3 py-1.5">Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <Link
          to="/student/collaboration"
          className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#800000] transition-all shadow-sm"
        >
          <Handshake className="h-8 w-8 text-[#800000] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-gray-900">Collaboration Hub</h3>
          <p className="text-xs text-gray-500 mt-1">Connect with teammates and collaborate on innovations.</p>
        </Link>

        <Link
          to="/student/mentors"
          className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#800000] transition-all shadow-sm"
        >
          <GraduationCap className="h-8 w-8 text-[#800000] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-gray-900">Find a Mentor</h3>
          <p className="text-xs text-gray-500 mt-1">Get feedback from academic &amp; industry expert advisors.</p>
        </Link>

        <Link
          to="/student/notifications"
          className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#800000] transition-all shadow-sm"
        >
          <Bell className="h-8 w-8 text-[#800000] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-gray-900">Notifications</h3>
          <p className="text-xs text-gray-500 mt-1">Check status updates, reviews, and event deadlines.</p>
        </Link>
      </div>
    </div>
  );
}
