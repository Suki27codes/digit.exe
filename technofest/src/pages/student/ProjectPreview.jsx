import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, FileText, User } from "lucide-react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { projects } from "../../data/projects";

export default function ProjectPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id)) || projects[0];

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-[#800000] hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to My Projects
      </button>

      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#800000]">{project.category}</span>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1">{project.title}</h1>
          </div>
          <Badge type={project.status === "approved" ? "success" : project.status === "pending" ? "warning" : "default"}>
            {project.status}
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Executive Summary</h3>
            <p className="mt-1 text-gray-600 text-sm leading-relaxed">{project.summary}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Problem Statement</h3>
            <p className="mt-1 text-gray-600 text-sm leading-relaxed">{project.problem || "No problem statement provided."}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Proposed Solution</h3>
            <p className="mt-1 text-gray-600 text-sm leading-relaxed">{project.solution || "No solution provided."}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
          <Link to={`/student/projects/${project.id}/edit`}>
            <Button variant="outline">Edit Project</Button>
          </Link>
          <Button onClick={() => alert("Project submitted!")}>Submit Project</Button>
        </div>
      </div>
    </div>
  );
}
