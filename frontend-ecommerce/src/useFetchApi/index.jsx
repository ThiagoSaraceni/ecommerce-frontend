import { useState, useEffect, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";

export const URLAPIECOMMERCE = "http://localhost:3000/api/";

export const useFetchApi = (baseUrl, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);
  const memoizedBaseUrl = useMemo(() => baseUrl, [baseUrl]);

  useEffect(() => {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

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
  }, [memoizedBaseUrl, memoizedParams, baseUrl]);

  return { data, isLoading, error };
};

export const useFetchApiPost = async (baseUrl, body = {}) => {
  const showSuccessAlert = (message) => {
    toast.success(message);
  };
  const toastError = (message) => toast.error(message);

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    if (!response?.ok) {
      return { response, result };
    } else {
      return { response, result };
    }
  } catch (error) {
    toastError();
  }
};
