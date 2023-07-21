import React from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  function handleLogin(username) {
    setIsLoggedIn(true);
    setUsername(username);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
