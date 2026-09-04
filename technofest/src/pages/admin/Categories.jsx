import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function Categories() {
  const [categories, setCategories] = useState([
    "Agriculture",
    "Education",
    "Health",
    "Technology",
    "Environment",
  ]);

  const [newCategory, setNewCategory] =
    useState("");

  const addCategory = () => {
    if (!newCategory.trim()) return;

    setCategories([
      ...categories,
      newCategory,
    ]);

    setNewCategory("");
  };

  const deleteCategory = (category) => {
    setCategories(
      categories.filter(
        (item) => item !== category
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#800000]">
        Categories & Tags
      </h1>

      <Card>
        <div className="flex gap-3">
          <input
            value={newCategory}
            onChange={(e) =>
              setNewCategory(e.target.value)
            }
            placeholder="New category"
            className="flex-1 rounded-lg border px-4 py-2"
          />

          <Button onClick={addCategory}>
            Add Category
          </Button>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
            >
              <span>{category}</span>

              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    const edited =
                      prompt(
                        "Edit category:",
                        category
                      );

                    if (edited) {
                      setCategories(
                        categories.map(
                          (item) =>
                            item === category
                              ? edited
                              : item
                        )
                      );
                    }
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
