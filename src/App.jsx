import React from "react";
import "./global.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setInfo(dados.data);
  };

  useEffect(() => {
    //o que eu quero que ele faça
    pegarDados();
    //quantas vezes (se o array for vazio, ele vai executar apenas uma vez)
  }, []);

// 
  return(
  <main>
    <h1>Apex!</h1>;

    {
      info.map((item) =>( 
        <article key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p> R$ {item.price}</p>
        </article>
      )) 
    }

  </main>
  
  

  )
}

export default App;
