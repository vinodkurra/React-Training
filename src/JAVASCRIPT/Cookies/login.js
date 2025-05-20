import Cookies from "universal-cookie";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    debugger;
    const response = `${username}:${password}`;

    if (response) {
      const data = { token: response };

      const cookies = new Cookies();
      cookies.set("token", data.token, { path: "/" });
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
