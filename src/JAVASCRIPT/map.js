import React from "react";
import "./style.css";

const data = [
  {
    id: 111,
    name: "Vinod",
    age: 29,
    job: "software",
    skills: ["react", "node js", "html"],
  },
  {
    id: 112,
    name: "Sam",
    age: 28,
    job: "developer",
    skills: ["Angular", "express js", "CSS"],
  },
  {
    id: 113,
    name: "Sathish",
    age: 32,
    job: "testeer",
    skills: ["java", "C ++", "selenium"],
  },
];

export default function App() {
  const names = data.map((value, index) => {
    return value.name;
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      {data.map((value, index) => {
        return (
          <div
            key={`${value.name}-${index}`}
            style={{
              color: "red",
              fontSize: "24px",
            }}
          >
            {" "}
            {value.name} {index}{" "}
          </div>
        );
      })}

      {data.map((value, index) => {
        return (
          <div
            key={value.job}
            style={{
              color: "red",
              fontSize: "24px",
              marginTop: "24px",
            }}
          >
            {" "}
            {value.job}{" "}
          </div>
        );
      })}
    </div>
  );
}

// react - virtual dom ->  previous dom - updated dom -> comparison

// real dom ->


false && true = false
true && true = true
false && false = false



false || true = true
false || false = false
true || true = true 


const array = ["vinod", "vishal", "venu"];

 

const name = "Vinod";

const isExist = array.includes(name);




import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [index, setIndex] = useState(null);

  const handleAdduser = () => {
    debugger;
    const isExist = users.includes(name);
    if (isExist) {
      alert('user already exist');
      return false;
    }

    if (index >= 0) {
      users[index] = name;
      setUsers(users);
      setIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName('');
  };

  const handleEditUser = (user, index) => {
    setIndex(index);
    setName(user);
  };

  return (
    <div>
      <h2> Users </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <span onClick={handleAdduser}> Add + </span>

      {users.map((user, index) => {
        return (
          <div key={index}>
            <span>{user}</span>
            <span onClick={() => handleEditUser(user, index)}> Edit </span>
          </div>
        );
      })}
    </div>
  );
}
