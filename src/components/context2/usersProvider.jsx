import { createContext, useEffect, useMemo } from "react";
import useFetch from "../../hooks/usefetch";

export const GetUsersContext = createContext(null);

export const GetUsersProvider = ({ children }) => {
  const {
    GET: todosGet,
    data: todosData,
    loading: todoLoading,
  } = useFetch("/tags");

  const fetchData = async () => {
    try {
      await todosGet();
    } catch (err) {
      console.log(err);
    }
  };

  const value = useMemo(
    () => ({
      fetchData,
      todoLoading,
      todosData,
    }),
    [fetchData, todoLoading, todosData]
  );

  return (
    <GetUsersContext.Provider value={value}>
      {children}
    </GetUsersContext.Provider>
  );
};
