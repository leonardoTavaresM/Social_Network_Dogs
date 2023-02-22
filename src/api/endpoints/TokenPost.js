import React, { useState } from "react";
// import URL from "./URL";

const TokenPost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  );
};

export default TokenPost;
