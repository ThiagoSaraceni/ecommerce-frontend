import { useState, useEffect, useCallback } from "react";

export const useFetchApi = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: params?.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...params?.headers,
        },
        body: params?.body ? JSON.stringify(params?.body) : null,
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [isLoading]);

  return { data, isLoading, error };
};
