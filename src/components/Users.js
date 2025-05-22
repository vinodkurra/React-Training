import { useEffect, useState } from "react";

const Users = ({ id }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     if (id) {
  //       fetchUsersDataAsyncAwait(id);
  //     }
  //   }, [id]);

  //   const fetchUsersDataAsyncAwait = async (id) => {
  //     try {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/posts/${id}`
  //       );
  //       const data = await response?.json();
  //       setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This functionality will trigger after every one second");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Hi I am Learning about useEffect today.
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
};

export default Users;
