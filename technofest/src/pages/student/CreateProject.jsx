import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Send } from "lucide-react";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

export default function CreateProject() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    summary: "",
    problem: "",
    solution: "",
    stage: "Idea",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (status) => {
    setError("");

    if (!formData.title.trim()) {
      setError("Project title is required.");
      return;
    }

    setLoading(true);

    const { error: dbError } = await supabase.from("projects").insert({
      title:      formData.title.trim(),
      category:   formData.category,
      summary:    formData.summary.trim(),
      problem:    formData.problem.trim(),
      solution:   formData.solution.trim(),
      stage:      formData.stage,
      status:     status,                  // 'draft' or 'pending'
      student_id: user.id,
    });

    setLoading(false);

    if (dbError) {
      setError(dbError.message);
      return;
    }

    navigate("/student/projects");
  };

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-[#800000] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div>
        <h1 className="text-3xl font-extrabold text-[#800000]">Create New Project</h1>
        <p className="text-sm text-gray-500 mt-1">Submit your innovative concept to Innoject.</p>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form
        className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Project Title"
          placeholder="e.g. Smart Agriculture Water Management System"
          value={formData.title}
          onChange={handleChange("title")}
          required
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={formData.category}
              onChange={handleChange("category")}
              className="w-full rounded-xl border border-gray-300 p-2.5 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
            >
              <option value="Agriculture">Agriculture</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Software & AI">Software &amp; AI</option>
              <option value="Technology">Technology</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Development Stage</label>
            <select
              value={formData.stage}
              onChange={handleChange("stage")}
              className="w-full rounded-xl border border-gray-300 p-2.5 text-sm focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
            >
              <option value="Idea">Idea Concept</option>
              <option value="Prototype">Working Prototype</option>
              <option value="Tested">Field Tested</option>
            </select>
          </div>
        </div>

        <Textarea
          label="Executive Summary"
          rows={3}
          placeholder="Brief overview of what your project aims to achieve..."
          value={formData.summary}
          onChange={handleChange("summary")}
        />

        <Textarea
          label="Problem Statement"
          rows={3}
          placeholder="What specific issue does this project address?"
          value={formData.problem}
          onChange={handleChange("problem")}
        />

        <Textarea
          label="Proposed Solution"
          rows={3}
          placeholder="Describe your technical or social solution..."
          value={formData.solution}
          onChange={handleChange("solution")}
        />

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            type="button"
            disabled={loading}
            onClick={() => handleSubmit("draft")}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            {loading ? "Saving…" : "Save Draft"}
          </Button>
          <Button
            type="button"
            disabled={loading}
            onClick={() => handleSubmit("pending")}
            className="flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            {loading ? "Submitting…" : "Submit Project"}
          </Button>
        </div>
      </form>
    </div>
  );
}
