import { useEffect } from "react";

export default function useDraft(
  key,
  value
) {
  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }, [key, value]);
}

export function getDraft(key) {
  const draft =
    localStorage.getItem(key);

  return draft
    ? JSON.parse(draft)
    : null;
}