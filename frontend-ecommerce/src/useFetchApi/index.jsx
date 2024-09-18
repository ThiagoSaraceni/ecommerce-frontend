import { useState, useEffect, useMemo } from "react";

export const URLAPIECOMMERCE = "http://localhost:3000/api/";

export const useFetchApi = (baseUrl, params = {}, refresh = false) => {
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
  }, [memoizedBaseUrl, memoizedParams, baseUrl, refresh]);

  return { data, isLoading, error };
};

export const useFetchApiPost = async (baseUrl, body = {}) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    return { response, result };
  } catch (error) {
    toastError();
  }
};

export const useFetchApiDelete = async (baseUrl, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({ response });
    if (response?.status === 204) {
      // Sucesso na deleção

      return { result: { success: true } };
    } else {
      return { result: { success: false } };
    }
  } catch (error) {
    console.log(error);
  }
};
