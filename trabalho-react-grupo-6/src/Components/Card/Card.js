import React from "react";
import { CardArea } from "./Styles";

export const ModelCard = ({ imagem , nomeProduto }) => {
   return (
    <CardArea>
      <div className="imagem">
        <img src="" alt={nomeProduto} />
      </div>
      <button>COMPRAR</button>
    </CardArea>
  )
}
