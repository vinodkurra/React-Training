import { useNavigate, Link } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // API CALL

    // success - token
    navigate("/dashboard");
  };
  return (
    <>
      <div>I am Welcome Page</div>

      <div> Click on below login button to navigate to dashboard</div>

      <button onClick={handleLogin}>Login</button>

      <Link to="/dashboard">Dashboard</Link>
    </>
  );
};

export default Welcome;
