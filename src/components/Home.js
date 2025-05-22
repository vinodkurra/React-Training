import { useEffect, useState } from "react";
import Users from "./Users";

const Home = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetchUsersDataAsyncAwait();
  }, []);

  const fetchUsersDataAsyncAwait = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response?.json();
      setData(data);
      setId(5);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Hi I am PARENT
      <Users id={id} />
    </div>
  );
};

export default Home;
