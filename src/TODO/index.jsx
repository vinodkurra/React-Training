import { useState } from "react";

const TodoApp = () => {
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

  console.log(users);
  return (
    <div>
      <div> TODO APP</div>
      <label>UserName</label>
      <input value={userName} onChange={handleUserName} />
      <button onClick={handleAdd}>Add</button>

      <div>
        <div>USERS LIST</div>
        <div>
          {users?.map((user, index) => {
            return (
              <div>
                <div key={index}>
                  {user}
                  <span
                    style={{
                      padding: "2px 10px",
                      backgroundColor: "red",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </span>
                  <span
                    style={{
                      padding: "2px 10px",
                      backgroundColor: "blue",
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "white",
                    }}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
