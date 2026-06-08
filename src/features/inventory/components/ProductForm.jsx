import { useState } from "react";

import {
  createProduct,
} from "../../../services/api/productApi";

import useCategories from "../hooks/useCategories";
import useUnits from "../hooks/useUnits";

import useDraft, {
  getDraft,
} from "../../../hooks/useDraft";

export default function ProductForm() {
  const draft =
    getDraft("product-form");

  const {
    categories,
  } = useCategories();

  const {
    units,
  } = useUnits();

  const [saving, setSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
      pcode:
        draft?.pcode || "",

      name:
        draft?.name || "",

      category_id:
        draft?.category_id || "",

      unit_id:
        draft?.unit_id || "",

      brand:
        draft?.brand || "",

      size:
        draft?.size || "",

      notes:
        draft?.notes || "",
    });

  useDraft(
    "product-form",
    formData
  );

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSaving(true);

      await createProduct(
        formData
      );

      localStorage.removeItem(
        "product-form"
      );

      setFormData({
        pcode: "",
        name: "",
        category_id: "",
        unit_id: "",
        brand: "",
        size: "",
        notes: "",
      });

      alert(
        "Product Created"
      );

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert(
        "Failed To Create Product"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-zinc-200 rounded-3xl p-5"
    >
      <h3 className="font-semibold text-lg mb-4">
        Add Product
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product Code"
          value={formData.pcode}
          onChange={(e) =>
            setFormData({
              ...formData,
              pcode:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <select
          value={formData.category_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              category_id:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        >
          <option value="">
            Select Category
          </option>

          {categories.map(
            (category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            )
          )}
        </select>

        <select
          value={formData.unit_id}
          onChange={(e) =>
            setFormData({
              ...formData,
              unit_id:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        >
          <option value="">
            Select Unit
          </option>

          {units.map((unit) => (
            <option
              key={unit.id}
              value={unit.id}
            >
              {unit.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Brand"
          value={formData.brand}
          onChange={(e) =>
            setFormData({
              ...formData,
              brand:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <input
          type="text"
          placeholder="Size"
          value={formData.size}
          onChange={(e) =>
            setFormData({
              ...formData,
              size:
                e.target.value,
            })
          }
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
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
          className="w-full p-4 border border-zinc-300 rounded-xl"
        />

        <button
          type="submit"
          disabled={saving}
          className="w-full h-12 bg-black text-white rounded-xl"
        >
          {saving
            ? "Saving..."
            : "Save Product"}
        </button>
      </div>
    </form>
  );
}