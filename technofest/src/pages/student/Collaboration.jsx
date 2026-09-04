import { useState } from "react";
import { Users, UserPlus, MessageSquare, Handshake } from "lucide-react";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export default function StudentCollaboration() {
  const [collaborators] = useState([
    { id: 1, name: "Student Two", role: "UI/UX Designer", project: "Smart Agriculture System", status: "Active" },
    { id: 2, name: "Student Three", role: "Backend Developer", project: "Community Health Platform", status: "Pending" },
    { id: 3, name: "Student Four", role: "Data Analyst", project: "Student Learning Assistant", status: "Active" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[#800000]">Team Collaboration</h1>
          <p className="text-sm text-gray-500 mt-1">Connect with student peers and manage team members.</p>
        </div>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" /> Invite Collaborator
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {collaborators.map((collab) => (
          <div key={collab.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-maroon-100 flex items-center justify-center font-bold text-[#800000]">
                {collab.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{collab.name}</h3>
                <p className="text-xs text-gray-500">{collab.role}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-2">
              <p>Project: <span className="font-semibold text-gray-800">{collab.project}</span></p>
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <Badge type={collab.status === "Active" ? "success" : "warning"}>{collab.status}</Badge>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" className="w-full text-xs flex items-center justify-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" /> Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
