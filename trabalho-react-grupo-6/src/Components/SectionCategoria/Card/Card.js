import React, {useContext} from "react";
import { CardArea} from "./Styles";
import { CartItensContext } from "../../../Context/data";


export const ModelCard = ({produto}) => {

  const {addItem} = useContext(CartItensContext)
    
  return (
    <CardArea>
      <div className="content">
        <div className="imagem">
          <img src={require(`../../../Assets/ProductImg/${produto.nomeImagemProduto}`)} alt={produto.nomeProduto} />
        </div>
        <div className="nomeProduto">
          <h2>{produto.nomeProduto}</h2>
        </div>
        <div className="valor">
          <h3>R$ {produto.valorUnitario}</h3>
        </div>
        <button onClick={() => addItem(produto)}>COMPRAR</button>
      </div>
    </CardArea>
  )
}
