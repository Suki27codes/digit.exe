import { useState } from "react";
import { User, Mail, GraduationCap, School, Save } from "lucide-react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "Student One",
    email: "student@example.com",
    institution: "PNG University of Technology",
    programme: "Computer Science",
    year: "2",
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[#800000]">Student Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account information and academic details.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
        <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
          <div className="h-20 w-20 rounded-2xl bg-[#800000] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            S1
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-sm text-[#800000] font-semibold">{profile.programme}</p>
            <p className="text-xs text-gray-500">{profile.institution}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <Input
            label="Email Address"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Input
            label="Institution / University"
            value={profile.institution}
            onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
          />
          <Input
            label="Degree Programme"
            value={profile.programme}
            onChange={(e) => setProfile({ ...profile, programme: e.target.value })}
          />
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <Button type="submit" className="flex items-center gap-2">
            <Save className="h-4 w-4" /> Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
