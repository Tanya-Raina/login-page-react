import React from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = React.useState("");

  function handleLogin() {
    onLogin(username);
  }

  return (
    <div>
      <h2>Login Page</h2>
      <div className="login-card">
        <div className="text-input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-input">
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
