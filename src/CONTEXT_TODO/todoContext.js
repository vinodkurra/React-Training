import { useContext } from "react";
import { UserContext } from "./todoProvider";

export const useUsers = () => {
  return useContext(UserContext);
};
