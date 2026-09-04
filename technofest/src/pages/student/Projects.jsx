import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Eye, Edit3, Trash2 } from "lucide-react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import { projects as initialProjects } from "../../data/projects";

export default function StudentProjects() {
  const [projectList, setProjectList] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projectList.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.summary.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this project draft?")) {
      setProjectList(projectList.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#800000]">My Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track your innovation project submissions.</p>
        </div>
        <Link to="/student/projects/new">
          <Button className="flex items-center gap-2 shadow-md">
            <Plus className="h-4 w-4" /> New Project
          </Button>
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex-1 relative">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
          >
            <option value="all">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#800000] uppercase tracking-wider">{project.category}</span>
                <Badge type={project.status === "approved" ? "success" : project.status === "pending" ? "warning" : "default"}>
                  {project.status}
                </Badge>
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">{project.summary}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex gap-2">
                <Link to={`/student/projects/${project.id}`}>
                  <Button variant="outline" className="p-2 text-gray-600 hover:text-[#800000]">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to={`/student/projects/${project.id}/edit`}>
                  <Button variant="outline" className="p-2 text-gray-600 hover:text-[#800000]">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <button
                onClick={() => handleDelete(project.id)}
                className="p-2 text-red-500 hover:text-red-700 transition-colors"
                title="Delete project"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
