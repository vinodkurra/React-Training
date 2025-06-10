import { useEffect } from "react";
import { useUser } from "./useUser";

const GetContextData = () => {
  const { fetchData } = useUser();

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Here I am calling API using context</div>;
};

export default GetContextData;
