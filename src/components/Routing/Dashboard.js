import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/account");
  };
  return (
    <>
      <div>I am Dashboard Page</div>

      <button onClick={handleNavigate}>Account</button>
    </>
  );
};

export default Dashboard;
