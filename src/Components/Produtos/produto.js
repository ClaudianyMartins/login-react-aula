import React, { Component } from "react";
import apiProduto from "../../Services/apiProdutos";

export default class Produto extends Component {
  state = {
    produtos: []
  };

  componentDidMount() {
    this.carregarProdutos();
  }

  async carregarProdutos() {
    let response = await apiProduto.get("/products");

    let { docs } = response.data;

    this.setState({ produtos: docs });
  }

  render() {
    return (
      <div>
        <h2>Listagem de produtos</h2>
        <div id="lista-produtos">
          {this.state.produtos.map((item, index) => (
            <section key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </section>
          ))}
        </div>
      </div>
    );
  }
}
