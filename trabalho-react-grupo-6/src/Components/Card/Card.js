import React from "react";
import { CardArea } from "./Styles";


export const ModelCard = ({ imagem, nomeProduto }) => {
  return (
    <CardArea>
      <div className="content">
        <div className="imagem">
          <img src={require(`../../Assets/ProductImg/${imagem}`)} alt={nomeProduto} />
        </div>
        <button>COMPRAR</button>
      </div>
    </CardArea>
  )
}
