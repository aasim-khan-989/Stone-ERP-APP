import { useState } from "react";

import {
  createUnit,
} from "../../../services/api/unitApi";

import useDraft, {
  getDraft,
} from "../../../hooks/useDraft";

export default function UnitForm() {
  const draft =
    getDraft("unit-form");

  const [formData, setFormData] =
    useState({
      name:
        draft?.name || "",

      ucode:
        draft?.ucode || "",

      notes:
        draft?.notes || "",
    });

  const [saving, setSaving] =
    useState(false);

  useDraft(
    "unit-form",
    formData
  );

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSaving(true);

      await createUnit(
        formData
      );

      localStorage.removeItem(
        "unit-form"
      );

      setFormData({
        name: "",
        ucode: "",
        notes: "",
      });

      alert("Unit Created");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Failed To Create Unit"
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
        Add Unit
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Unit Name"
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

        <input
          type="text"
          placeholder="Unit Code"
          value={formData.ucode}
          onChange={(e) =>
            setFormData({
              ...formData,
              ucode:
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
            : "Save Unit"}
        </button>
      </div>
    </form>
  );
}