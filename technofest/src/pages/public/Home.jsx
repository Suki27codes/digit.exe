import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FolderKanban, Users, GraduationCap, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";
import PublicLayout from "../../components/layout/PublicLayout";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <PublicLayout>
      <div className="space-y-16 pb-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#800000] via-[#660000] to-[#400000] pt-20 pb-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md border border-white/10 mb-6">
              <Sparkles className="h-4 w-4" /> Innoject 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Showcasing Student Innovation & Technology Excellence
            </h1>
            <p className="mt-6 text-lg text-maroon-100 max-w-2xl mx-auto font-light leading-relaxed">
              Empowering students, mentors, and industry partners to collaborate, present real-world projects, and drive digital transformation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/explore">
                <Button variant="secondary" className="px-8 py-3.5 text-base font-bold shadow-xl hover:shadow-2xl flex items-center gap-2">
                  Explore Projects <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="px-8 py-3.5 text-base font-bold border-white/30 text-white hover:bg-white/10">
                  Register as Student
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="container mx-auto px-6 -mt-12 relative z-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 p-4 border-r border-gray-100 last:border-0">
              <div className="p-3 bg-maroon-50 rounded-2xl text-[#800000]">
                <FolderKanban className="h-7 w-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">50+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Student Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border-r border-gray-100 last:border-0">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">200+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Students</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border-r border-gray-100 last:border-0">
              <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">30+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Expert Mentors</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">15+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Industry Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#800000] uppercase tracking-widest">Innovation Showcase</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Featured Student Innovations</h2>
            </div>
            <Link to="/explore" className="text-sm font-bold text-[#800000] hover:underline flex items-center gap-1">
              View All Innovations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-maroon-50 px-3 py-1 text-xs font-bold text-[#800000]">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">{project.stage}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">By {project.team?.[0]?.name || "Student Team"}</span>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="outline" className="text-xs">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-[#800000] p-12 text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold">Ready to share your project with the world?</h2>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Join Innoject today to present your tech solutions to industry representatives, gain mentorship, and unlock career opportunities.
              </p>
            </div>
            <Link to="/signup">
              <Button variant="secondary" className="px-8 py-4 text-base font-bold shadow-lg hover:scale-105 transition-transform">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
