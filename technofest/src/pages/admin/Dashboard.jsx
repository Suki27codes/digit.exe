import StatCard from "../../components/ui/StatCard";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/layout/PageHeader";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 text-center">
      <PageHeader
        title="Admin Dashboard"
        description="Manage the Innoject platform."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="245" icon="👥" />
        <StatCard title="Pending Submissions" value="18" icon="📝" />
        <StatCard title="Approved Projects" value="72" icon="✅" />
        <StatCard title="Organizations" value="32" icon="🏢" />
        <StatCard title="Mentors" value="14" icon="🎓" />
      </div>

      <Card>
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>

        <div className="mt-4 space-y-4">
          <p>New project submission received.</p>
          <p>Pacific Tech Ltd verified.</p>
          <p>New mentor registered.</p>
          <p>Project "EduConnect" approved.</p>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold">
          Reports
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-beige-50 p-4">
            Projects by Category
          </div>

          <div className="rounded-lg bg-beige-50 p-4">
            Projects by Stage
          </div>

          <div className="rounded-lg bg-beige-50 p-4">
            Project Approval Rate
          </div>
        </div>
      </Card>
    </div>
  );
}
