import { useState } from "react";

import {
  createCategory,
} from "../../../services/api/categoryApi";

import useDraft, {
  getDraft,
} from "../../../hooks/useDraft";

export default function CategoryForm() {
  const draft =
    getDraft("category-form");

  const [formData, setFormData] =
    useState({
      name:
        draft?.name || "",

      notes:
        draft?.notes || "",
    });

  const [saving, setSaving] =
    useState(false);

  useDraft(
    "category-form",
    formData
  );

  async function handleSubmit(
    e
  ) {
    e.preventDefault();

    try {
      setSaving(true);

      await createCategory(
        formData
      );

      localStorage.removeItem(
        "category-form"
      );

      setFormData({
        name: "",
        notes: "",
      });

      alert(
        "Category Created"
      );

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Failed To Create Category"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        border
        border-zinc-200
        rounded-3xl
        p-5
      "
    >
      <h3 className="font-semibold mb-4">
        Add Category
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Category Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            border-zinc-300
            rounded-xl
          "
        />

        <textarea
          placeholder="Notes"
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            border
            border-zinc-300
            rounded-xl
          "
        />

        <button
          type="submit"
          disabled={saving}
          className="
            w-full
            h-12
            bg-black
            text-white
            rounded-xl
          "
        >
          {saving
            ? "Saving..."
            : "Save Category"}
        </button>
      </div>
    </form>
  );
}