import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div>I am Account Page</div>

      <div> Click on below logout button to navigate to Welcome page</div>

      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Account;
