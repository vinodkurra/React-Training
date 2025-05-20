// USING CALLBACK

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CALLING THIRD: this will get data as argument.
    const handleResponse = () => {
      (data) => {
        setData(data);
        setLoading(false);
      };
    };

    fetchUsersDataWithCallBack(handleResponse); // CALLING FIRST with call back
  }, []);

  //  API call and getting response with fetch method   // CALLING SECOND
  //  converting response to Json format
  // after that sending json data to call back
  const fetchUsersDataWithCallBack = (handleResponse) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response?.json())
      .then((data) => handleResponse(data))
      .catch((error) => console.log("error while fetching data", error));
  };

  return (
    <div className="App">
      {loading ? " Loading ..." : ""}
      {/* false ? trueStatement : falseStaement   */}
      {data &&
        data?.map((user) => {
          return <div> {user.title}</div>;
        })}
    </div>
  );
}


// USING PROMISE

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsersData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const fetchUsersData = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`).then(
      (response) => response.json()
    );
  };

  return (
    <div className="App">
      {loading ? " Loading ..." : ""}
      {/* false ? trueStatement : falseStaement   */}
      {data &&
        data?.map((user) => {
          return <div> {user.title}</div>;
        })}
    </div>
  );
}


// ASYNC & AWAIT


import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // http request => promise
  // async && await key => it will wait untill either promise get resolve or reject,

  return (
    <div className="App">
      {loading ? " Loading ..." : ""}
      {/* false ? trueStatement : falseStaement   */}
      {data &&
        data?.map((user) => {
          return <div> {user.title}</div>;
        })}
    </div>
  );
}


// try - catch && fetch - axios 