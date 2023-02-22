import React, { useState } from "react";
// import URL from "./URL";

const PhotoPost = () => {
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    fetch(`https://dogsapi.origamid.dev/json/api/photo`, {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="Peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
