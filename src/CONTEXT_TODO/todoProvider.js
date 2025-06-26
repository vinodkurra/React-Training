import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handleAdd = () => {
    const value = userName.trim();
    if (value?.length < 3) return;
    if (users?.includes(value)) {
      alert("duplicate value, please add another");
      return;
    }

    if (editIndex !== null) {
      const list = [...users];
      list[editIndex] = value;
      setUsers(list);
      setEditIndex(null);
    } else {
      setUsers([value, ...users]);
    }
    setUserName("");
  };

  const handleDelete = (index) => {
    const list = [...users];
    list.splice(index, 1);
    setUsers(list);
  };

  const handleEdit = (index) => {
    setUserName(users[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === "Enter") {
        handleAdd();
      }
    };

    document.addEventListener("keydown", handleEnterKey);

    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [userName]);

  return (
    <UserContext.Provider
      value={{
        userName,
        handleUserName,
        users,
        handleAdd,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
