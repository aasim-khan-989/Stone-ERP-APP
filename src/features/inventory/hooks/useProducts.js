import { useEffect, useState } from "react";

import {
  getProducts,
} from "../../../services/api/productApi";

export default function useProducts() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data =
        await getProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    products,
    loading,
    loadProducts,
  };
}