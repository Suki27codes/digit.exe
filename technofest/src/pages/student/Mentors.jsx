import { useState } from "react";
import { GraduationCap, Star, Mail, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";
import { mentors } from "../../data/mentors";

export default function StudentMentors() {
  const [mentorList] = useState(mentors);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[#800000]">Academic & Industry Mentors</h1>
        <p className="text-sm text-gray-500 mt-1">Connect with mentors to receive guidance on your innovation project.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentorList.map((mentor) => (
          <div key={mentor.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {mentor.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-xs text-[#800000] font-semibold">{mentor.title || mentor.role}</p>
                <p className="text-xs text-gray-500">{mentor.institution}</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-600 line-clamp-2">
              Expertise: {mentor.expertise ? mentor.expertise.join(", ") : "Technology, Innovation, Strategy"}
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Available for Mentorship
              </span>
              <Button className="text-xs px-3 py-1.5 flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" /> Request
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
