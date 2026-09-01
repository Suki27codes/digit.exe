import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    summary: "",
    problem: "",
    solution: "",
  });
  const [fetchLoading, setFetchLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [error, setError] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  // Fetch the project on mount
  useEffect(() => {
    async function fetchProject() {
      const { data, error: fetchError } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .eq("student_id", user.id)   // ensure the user owns this project
        .single();

      if (fetchError || !data) {
        setError("Project not found or you don't have permission to edit it.");
        setFetchLoading(false);
        return;
      }

      setProjectTitle(data.title);
      setFormData({
        title:    data.title    ?? "",
        category: data.category ?? "",
        summary:  data.summary  ?? "",
        problem:  data.problem  ?? "",
        solution: data.solution ?? "",
      });
      setFetchLoading(false);
    }

    fetchProject();
  }, [id, user.id]);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSaveLoading(true);

    const { error: updateError } = await supabase
      .from("projects")
      .update({
        title:    formData.title.trim(),
        category: formData.category,
        summary:  formData.summary.trim(),
        problem:  formData.problem.trim(),
        solution: formData.solution.trim(),
      })
      .eq("id", id)
      .eq("student_id", user.id);   // double-check ownership on update too

    setSaveLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    navigate("/student/projects");
  };

  if (fetchLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#800000] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-[#800000] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </button>

      <div>
        <h1 className="text-3xl font-extrabold text-[#800000]">Edit Project</h1>
        {projectTitle && (
          <p className="text-sm text-gray-500 mt-1">
            Updating details for &quot;{projectTitle}&quot;
          </p>
        )}
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <Input
          label="Project Title"
          value={formData.title}
          onChange={handleChange("title")}
          required
        />

        <Textarea
          label="Executive Summary"
          rows={3}
          value={formData.summary}
          onChange={handleChange("summary")}
        />

        <Textarea
          label="Problem Statement"
          rows={3}
          value={formData.problem}
          onChange={handleChange("problem")}
        />

        <Textarea
          label="Proposed Solution"
          rows={3}
          value={formData.solution}
          onChange={handleChange("solution")}
        />

        <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
          <Button type="submit" disabled={saveLoading} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            {saveLoading ? "Saving…" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
