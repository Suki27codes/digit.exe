import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, FolderKanban, Tag } from "lucide-react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import PublicLayout from "../../components/layout/PublicLayout";
import { projects } from "../../data/projects";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Agriculture", "Health", "Education", "Software & AI"];

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PublicLayout>
      <div className="container mx-auto px-6 py-12 space-y-8">
        <div>
          <span className="text-xs font-bold text-[#800000] uppercase tracking-widest">Public Directory</span>
          <h1 className="text-3xl font-black text-gray-900 mt-1">Explore Student Innovations</h1>
          <p className="text-sm text-gray-500 mt-1">Browse groundbreaking projects created by PNG university students.</p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="max-w-xl">
            <Input
              placeholder="Search by title, keyword, or problem..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#800000] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#800000] uppercase tracking-wider">{project.category}</span>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">{project.stage}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{project.summary}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">By {project.team?.[0]?.name || "Student Team"}</span>
                <Link to={`/projects/${project.id}`}>
                  <Button variant="outline" className="text-xs">View Project</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
