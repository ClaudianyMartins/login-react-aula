import React, { Component } from "react";
import "./home.css";
import Pokebola from "../assets/imagem/pokebola.jpg";

export default class Home extends Component {
  voltar = (event) => {
    this.props.history.push("/login");
  };

  irParaCards = (event) => {
    this.props.history.push("/cards");
  };

  irParaProdutos = (event) => {
    this.props.history.push("/produtos");
  };

  render() {
    const id = 4;
    return (
      <div>
        <h1> Bem vindo à Home </h1> <br />
        <br />
        <button className="btn" onClick={this.voltar}>
          Voltar{" "}
        </button>
        <button className="btn" onClick={this.irParaCards}>
          Card{" "}
        </button>
        <button className="btn" onClick={this.irParaProdutos}>
          Produtos{" "}
        </button>
        <br /> <br />
        <img
          src="https://assets-cdn.kangaroo.com.br/images/maldivas/water-villa-maalifushi-by-como-ilhas-maldivas.jpg"
          alt="ilhas maldivas"
        />
        <br />
        <br />
        <img
          className="card-pokemon"
          src={`https://images.pokemontcg.io/xy7/${id}.png`}
          alt="belossom"
        />
        <br /> <br />
        <img id="pokebola" src={Pokebola} alt=" Pokebola" />
        <br /> <br />
      </div>
    );
  }
}
