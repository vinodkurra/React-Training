import { useUsers } from "./todoContext";

const ContextTodoComponent = () => {
  const {
    userName,
    handleUserName,
    users,
    handleAdd,
    handleDelete,
    handleEdit,
    handleEnterKey,
  } = useUsers();
  console.log(userName);
  return (
    <div>
      <label>User Name : </label>
      <input
        value={userName}
        onChange={handleUserName}
        onKeyDown={handleEnterKey}
      />
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

export default ContextTodoComponent;
