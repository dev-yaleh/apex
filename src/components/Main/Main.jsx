import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

/**
 * Componente Main
 * Responsável pela requisição à Fake Store API usando Axios e renderização dos cards.
 */
function Main() {
  /**
   * useState: cria o estado 'produtos' inicializado com um array vazio ([]).
   * Ele irá guardar os dados retornados pela API após a requisição.
   */
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setInfo(dados.data);
    console.log(dados.data);
  };
  /**
   * useEffect: executa efeitos colaterais.
   * O array de dependências vazio ([]) garante que a função execute
   * apenas uma vez quando o componente for montado na tela.
   */
  useEffect(() => {
    pegarDados();
  }, []);

  /**
   * Função auxiliar didática para formatar os preços em dólares americanos ($)
   */
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  // //Filter para exibir apenas os produtos da categoria
  // const filtrarProdutos = info.filter((item) => item.category === ' electronics');

  return (
    <main className="main">
      <h2 className="main-heading">Catálogo de Produtos</h2>

      {/* Grid responsivo mobile-first configurado via CSS */}
      <div className="products-grid">
        {/**
         * .map() percorre o array 'info' e cria um card <article> para cada item.
         * key={item.id} é a chave única obrigatória no React para listas.
         */}
        {info.map((item) => (
          <article key={item.id} className="product-card">
            {/* Container da imagem com altura fixa */}
            <div className="product-image-container">
              {/* Alt descritivo contendo o título para acessibilidade */}
              <img
                src={item.image}
                alt={`Imagem do produto ${item.title}`}
                className="product-image"
              />
            </div>

            {/* Categoria do produto */}
            <span className="product-category">{item.category}</span>

            {/* Título do produto */}
            <h3 className="product-title" title={item.title}>
              {item.title}
            </h3>

            {/* Preço formatado */}
            <p className="product-price">{formatarPreco(item.price)}</p>

            {/* Descrição resumida */}
            <p className="product-description">{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Main;
