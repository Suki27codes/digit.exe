import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { projects } from "../../data/projects";

export default function Submissions() {
  const [status, setStatus] = useState({});

  const updateStatus = (id, newStatus) => {
    setStatus({
      ...status,
      [id]: newStatus,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Project Submissions
        </h1>

        <p className="text-gray-500">
          Review and moderate submitted projects.
        </p>
      </div>

      <div className="space-y-5">
        {projects.map((project) => {
          const currentStatus =
            status[project.id] || "Pending";

          return (
            <Card key={project.id}>
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="text-xl font-semibold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {project.summary}
                  </p>

                  <p className="mt-2 text-sm">
                    Student:{" "}
                    {project.team[0].name}
                  </p>

                  <p className="text-sm">
                    Category: {project.category}
                  </p>
                </div>

                <Badge
                  type={
                    currentStatus === "Approved"
                      ? "success"
                      : currentStatus === "Rejected"
                      ? "danger"
                      : "warning"
                  }
                >
                  {currentStatus}
                </Badge>
              </div>

              <div className="mt-5 border-t pt-5">
                <h3 className="font-semibold">
                  Project Preview
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Problem: {project.problem}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Solution: {project.solution}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Impact: {project.impact}
                </p>
              </div>

              <div className="mt-5">
                <h3 className="font-semibold">
                  Checklist
                </h3>

                <div className="mt-2 space-y-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Project information complete
                  </label>

                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Student information verified
                  </label>

                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Project meets requirements
                  </label>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button
                  variant="ghost"
                  onClick={() =>
                    updateStatus(project.id, "Approved")
                  }
                >
                  Approve
                </Button>

                <Button
                  variant="secondary"
                  onClick={() =>
                    updateStatus(
                      project.id,
                      "Changes Requested"
                    )
                  }
                >
                  Request Changes
                </Button>
              </div>

              <div className="mt-5 border-t pt-4">
                <h3 className="font-semibold">
                  Decision History
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Current decision: {currentStatus}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
