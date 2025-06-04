import { useEffect, useState } from "react";
import useFetch from "../hooks/usefetch";

const GetUserData = () => {
  const {
    GET: todosGet,
    data: todosData,
    error: todosError,
    loading: todoLoading,
  } = useFetch("/tags");

  const {
    GET: postsGet,
    data: postsData,
    error: postsError,
    loading: postsLoading,
  } = useFetch("/tags");

  const { POST: POSTAPI, data: postAPiData } = useFetch("/add");

  useEffect(() => {
    // todosGet();
    // postsGet();
    POSTAPI("POST", {
      title: "I am in love with someone.",
      userId: 5,
    });
  }, []);

  if (todoLoading || postsLoading) {
    return <div> LOADING ......</div>;
  }
  return (
    <div>
      My TODOS Data
      <div>
        {todosData?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      MY POSTS DATA
      {postsData?.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default GetUserData;

// 1) try catch
// 2) states: data, loading, error
// 3) json converting
// 4) error handling
// 5) loader handling

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts`
//       );
//       const json_response = await response.json();
//       setData(json_response);
//     } catch (error) {
//       console.log("GET USER DATA ERROR..:", error);
//     }
//   };
