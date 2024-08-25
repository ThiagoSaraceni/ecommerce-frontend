import { useState, useEffect, useMemo } from "react";

export const URLAPIECOMMERCE = "http://localhost:3000/api/";

export const useFetchApi = (baseUrl, params = {}, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);
  const memoizedBaseUrl = useMemo(() => baseUrl, [baseUrl]);

  useEffect(() => {
    const queryString = new URLSearchParams(params).toString();
    const url = `${baseUrl}?${queryString}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: options?.method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options?.body) : null,
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

    fetchData();
  }, [memoizedBaseUrl, memoizedParams]);

  return { data, isLoading, error };
};
