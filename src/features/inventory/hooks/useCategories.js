import { useEffect, useState } from "react";

import {
  getCategories,
} from "../../../services/api/categoryApi";

export default function useCategories() {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const data =
        await getCategories();

      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    categories,
    loading,
    loadCategories,
  };
}