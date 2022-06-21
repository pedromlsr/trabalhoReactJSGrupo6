import React, { useState } from "react";
import { ModalItemPedido } from "./style";

export const ItemPedido = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1)
  return (
    <ModalItemPedido>
      <td>
        {produto.produto.nomeProduto}
      </td>
      <td>
        {produto.produto.descricaoProduto}
      </td>
      <td>
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} min={0}></input>
      </td>
      <td>
        {produto.precoVenda}
      </td>
      <td>
        {quantidade * produto.precoVenda}
      </td>
    </ModalItemPedido>

  )
}