import { useUser } from "./useUser";
const ShowUsers = () => {
  const { todosData, todoLoading } = useUser();

  if (todoLoading) {
    return <div> LOADING ......</div>;
  }
  return (
    <div>
      My TODOS Data
      <div>
        {todosData?.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ShowUsers;
