import { useEffect, useState } from "react";

import {
  getUnits,
} from "../../../services/api/unitApi";

export default function useUnits() {
  const [units, setUnits] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadUnits();
  }, []);

  async function loadUnits() {
    try {
      const data =
        await getUnits();

      setUnits(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    units,
    loading,
    loadUnits,
  };
}