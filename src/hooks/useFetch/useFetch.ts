import { useState, useEffect, useMemo, useCallback } from "react";

const useFetch = (url: string, options: RequestInit = {}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  const fetchData = useCallback(async (controller: AbortController) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, { ...memoizedOptions, signal: controller.signal });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [url, memoizedOptions]);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    fetchData(controller);

    return () => controller.abort();
  }, [url, fetchData]);

  return { data, loading, error };
};

export default useFetch;
