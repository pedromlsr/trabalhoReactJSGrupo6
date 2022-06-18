import React from "react";
import { CardArea } from "./Styles";

export const ModelCard = ({ imagem }) => {

  return (
    <CardArea>
      <div className="imagem">
        <img src={imagem} alt="teste" />
      </div>
      <button>COMPRAR</button>
    </CardArea>
  )
}
