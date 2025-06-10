import { useState, useCallback } from "react";

const BASE_URL = `https://dummyjson.com/posts`;

const token = `kjfgkuffe9867896sgbdjsduy5s675svdstudrsydrysv`;

const useFetch = (endPoint, isPublic = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (method = "GET", body, returnHttpReponse = false, id, param) => {
      setError(null);
      setLoader(true);
      try {
        const headers = {};
        if (!isPublic) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        if (body) {
          headers["content-type"] = "application/json";
        }

        let fullUrl = `${BASE_URL}${endPoint}`;

        // if (id !== undefined) {
        //   fullUrl = `${fullUrl}/${id}`;
        // }

        // if (param) {
        //   fullUrl = `${fullUrl}/?${param}`;
        // }

        const response = await fetch(fullUrl, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined,
        });

        // const response = await fetch(fullUrl, {
        //   method,
        // });

        if (returnHttpReponse) {
          setData(response);
          return response;
        }

        const json = await response.json();
        setData(json);
        return json;
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    },
    [endPoint, isPublic, token]
  );

  const GET = useCallback(
    (
      method = "GET",
      body = null,
      id = null,
      param = null,
      returnHttpReponse = false
    ) => {
      fetchData(method, body, id, param, returnHttpReponse);
    },
    [fetchData]
  );

  const POST = useCallback(
    (
      method = "POST",
      body = null,
      id = null,
      param = null,
      returnHttpReponse = false
    ) => {
      fetchData(method, body, id, param, returnHttpReponse);
    },
    [fetchData]
  );

  return {
    data,
    error,
    loading,
    GET,
    POST,
  };
};

export default useFetch;
