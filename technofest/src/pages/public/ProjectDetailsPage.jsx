import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, User, GraduationCap, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import PublicLayout from "../../components/layout/PublicLayout";
import { projects } from "../../data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id)) || projects[0];

  return (
    <PublicLayout>
      <div className="container mx-auto px-6 py-12 max-w-4xl space-y-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-[#800000] hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Innovations
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#800000]">{project.category}</span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">{project.title}</h1>
            </div>
            <Badge type={project.status === "approved" ? "success" : "warning"}>
              {project.status === "approved" ? "Verified Innovation" : "Under Review"}
            </Badge>
          </div>

          {/* Core Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Summary</h3>
              <p className="mt-2 text-gray-700 text-base leading-relaxed">{project.summary}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#800000]">Problem Addressed</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-green-700">Innovated Solution</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Team & Mentor */}
            <div className="grid gap-6 md:grid-cols-2 pt-4">
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                  <User className="h-5 w-5 text-[#800000]" /> Student Innovators
                </h3>
                <ul className="space-y-2">
                  {project.team?.map((member, i) => (
                    <li key={i} className="text-xs text-gray-600">
                      <span className="font-semibold text-gray-900">{member.name}</span> • {member.programme} (Year {member.year})
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                  <GraduationCap className="h-5 w-5 text-[#800000]" /> Assigned Mentor
                </h3>
                {project.mentor ? (
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-gray-900">{project.mentor.name}</span> ({project.mentor.role})
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 italic">No mentor assigned yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
