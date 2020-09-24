import React, { Component } from "react";
import Api from "../../Services/api";
import "./cards.css";

export default class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.carregarListaCards();
  }

  async carregarListaCards() {
    let response = await Api.get("/cards");
    let listaCards = response.data.cards;

    let arrayCard = [];
    for (let card of listaCards) {
      arrayCard.push({
        id: card.id,
        nome: card.name,
        imagemUrl: card.imageUrl
      });
    }

    this.setState({ cards: arrayCard });
  }

  render() {
    return (
      <div>
        <div id="lista-cards">
          {this.state.cards.map((card, index) => (
            <div key={index}>
              <p>{card.nome}</p>
              <img
                className="imagem-cards"
                src={card.imagemUrl}
                alt={card.nome}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
