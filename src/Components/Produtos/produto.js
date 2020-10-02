import React, { Component } from "react";
import apiProduto from "../../Services/apiProdutos";

export default class Produto extends Component {
  state = {
    produtos: [], //vao ficar os itens paginados
    produtosTotal: [], // vao ficar todos os itens
    totalProdutos: 0,
    totalPaginas: 0,
    indexInicial: 0,
    indexFinal: 5,
    paginaAnterior: 0,
    proximaPagina: 0,
    paginaAtual: 1
  };

  componentDidMount() {
    this.carregarProdutos();
  }

  async carregarProdutos() {
    let response = await apiProduto.get("/products");

    let { docs } = response.data;

    this.setState({
      produtosTotal: docs,
      totalProdutos: docs.length,
      totalPaginas: docs.length / 5,
      indexInicial: 0,
      indexFinal: 5,
      paginaAnterior: 1,
      proximaPagina: 2,
      paginaAtual: 1
    });

    let { produtosTotal, produtos, indexInicial, indexFinal } = this.state;

    produtos = produtosTotal.slice(indexInicial, indexFinal);
    this.setState({
      produtos: produtos,
      indexInicial: indexFinal,
      indexFinal: indexFinal + 5
    });
  }

  irPaginaAnterior = (event) => {
    let {
      produtosTotal,
      produtos,
      indexInicial,
      indexFinal,
      paginaAnterior
    } = this.state;

    produtos = produtosTotal.slice(indexInicial, indexFinal);

    this.setState({
      produtos: produtos,
      paginaAtual: paginaAnterior,
      proximaPagina: paginaAnterior,
      paginaAnterior: paginaAnterior - 1,
      indexInicial: indexFinal,
      indexFinal: indexFinal + 5
    });
  };

  irProximaPagina = (event) => {
    let { totalPaginas, proximaPagina } = this.state;

    if (proximaPagina <= totalPaginas) {
      let { produtosTotal, produtos, indexInicial, indexFinal } = this.state;

      produtos = produtosTotal.slice(indexInicial, indexFinal);

      this.setState({
        produtos: produtos,
        paginaAtual: proximaPagina,
        proximaPagina: proximaPagina + 1,
        paginaAnterior: proximaPagina,
        indexInicial: indexFinal,
        indexFinal: indexFinal + 5
      });
    }
  };

  render() {
    const { totalPaginas, paginaAtual } = this.state;
    return (
      <div>
        <button disabled={paginaAtual === 1} onClick={this.irPaginaAnterior}>
          Anterior
        </button>
        <button
          disabled={paginaAtual === totalPaginas}
          onClick={this.irProximaPagina}
        >
          Próxima
        </button>
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
