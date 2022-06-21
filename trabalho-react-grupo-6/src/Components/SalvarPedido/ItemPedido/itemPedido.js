import React from "react";
import { ModalItemPedido} from "./style";

export const ItemPedido = ({ produto }) => {

  return (
   <ModalItemPedido> 
      <td>
        {produto.produto.nomeProduto}
      </td>
      <td>
        {produto.produto.descricaoProduto}
      </td>
      <td>
        <input type="number" required></input>
      </td>
      <td>
        {produto.produto.precoVenda}
      </td>
      <td>
        valor total
      </td>
    </ModalItemPedido>
    
  )
}