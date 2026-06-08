import { useState } from "react";

import PageHeader from "../../../components/ui/PageHeader";

import useProducts from "../hooks/useProducts";

import useDraft, {
  getDraft,
} from "../../../hooks/useDraft";

import apiClient from "../../../services/api/apiClient";

export default function AddStockPage() {
  const draft =
    getDraft("stock-in-form");

  const { products } =
    useProducts();

  const [saving, setSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
      product_id:
        draft?.product_id || "",

      quantity:
        draft?.quantity || "",

      rate:
        draft?.rate || "",

      reference_no:
        draft?.reference_no || "",

      remarks:
        draft?.remarks || "",

      transaction_date:
        draft?.transaction_date ||
        new Date()
          .toISOString()
          .split("T")[0],
    });

  useDraft(
    "stock-in-form",
    formData
  );

  async function handleSubmit(
    e
  ) {
    e.preventDefault();

    try {
      setSaving(true);

      await apiClient.post(
        "/stock-transactions",
        {
          ...formData,

          amount:
            Number(
              formData.quantity
            ) *
            Number(
              formData.rate
            ),

          transaction_type:
            "IN",
        }
      );

      localStorage.removeItem(
        "stock-in-form"
      );

      alert(
        "Stock Added Successfully"
      );

      setFormData({
        product_id: "",
        quantity: "",
        rate: "",
        reference_no: "",
        remarks: "",
        transaction_date:
          new Date()
            .toISOString()
            .split("T")[0],
      });
    } catch (error) {
      console.error(error);

      alert(
        "Failed To Add Stock"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Stock In"
        subtitle="Increase inventory quantities"
      />

      <form
        onSubmit={
          handleSubmit
        }
        className="
          bg-white
          border
          border-zinc-200
          rounded-3xl
          p-5
          space-y-4
        "
      >
        <select
          value={
            formData.product_id
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              product_id:
                e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            rounded-xl
          "
        >
          <option value="">
            Select Product
          </option>

          {products.map(
            (product) => (
              <option
                key={
                  product.id
                }
                value={
                  product.id
                }
              >
                {product.name}
              </option>
            )
          )}
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={
            formData.quantity
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              quantity:
                e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            rounded-xl
          "
        />

        <input
          type="number"
          placeholder="Rate"
          value={formData.rate}
          onChange={(e) =>
            setFormData({
              ...formData,
              rate:
                e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            rounded-xl
          "
        />

        <input
          type="text"
          placeholder="Reference No"
          value={
            formData.reference_no
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              reference_no:
                e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            rounded-xl
          "
        />

        <textarea
          placeholder="Remarks"
          value={
            formData.remarks
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              remarks:
                e.target.value,
            })
          }
          className="
            w-full
            p-4
            border
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
            : "Save Stock In"}
        </button>
      </form>
    </div>
  );
}