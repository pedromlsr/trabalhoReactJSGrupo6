import React from "react";
import { CardArea } from "./Styles";


export const ModelCard = ({ imagem, nomeProduto, valor }) => {
  return (
    <CardArea>
      <div className="content">
        <div className="imagem">
          <img src={require(`../../../Assets/ProductImg/${imagem}`)} alt={nomeProduto} />
        </div>
        <div className="nomeProduto">
          <h2>{nomeProduto}</h2>
        </div>
        <div className="valor">
          <h3>R$ {valor}</h3>
        </div>
        <button>COMPRAR</button>
      </div>
    </CardArea>
  )
}
