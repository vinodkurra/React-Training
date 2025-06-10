import { useContext } from "react";

import { GetUsersContext } from "./usersProvider";

export const useUser = () => {
  const context = useContext(GetUsersContext);

  if (!context) {
    throw new Error("useUser must be used with in a counter provider");
  }

  return context;
};
