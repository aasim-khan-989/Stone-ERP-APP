import { useEffect, useState }
from "react";

import {
  getCurrentStock,
} from "../../../services/api/stockApi";

export default function useCurrentStock() {
  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStock();
  }, []);

  async function loadStock() {
    try {
      const result =
        await getCurrentStock();

      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
  };
}