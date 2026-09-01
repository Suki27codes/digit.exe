import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

export default function OrganizationProfile() {
  const [form, setForm] = useState({
    companyName: "Pacific Tech Ltd",
    employerName: "John Smith",
    hrRole: "HR Manager",
    email: "hr@pacifictech.com",
    address: "Lae, Morobe Province",
    workNumber: "+675 123 4567",
    intentions:
      "We want to discover student projects and recruit talented students.",
  });

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Organization profile saved.");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#800000]">
          Organization Profile
        </h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            ["companyName", "Company Name"],
            ["employerName", "Employer Name"],
            ["hrRole", "HR Role"],
            ["email", "Email"],
            ["address", "Address"],
            ["workNumber", "Work Number"],
          ].map(([field, label]) => (
            <Input
              key={field}
              label={label}
              value={form[field]}
              onChange={(e) =>
                updateField(field, e.target.value)
              }
            />
          ))}

          <Textarea
            label="Intentions for joining Innoject"
            rows="5"
            value={form.intentions}
            onChange={(e) =>
              updateField("intentions", e.target.value)
            }
          />

          <Button type="submit">
            Save Profile
          </Button>
        </form>
      </Card>
    </div>
  );
}
