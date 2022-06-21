import React, { useState } from "react";
import { ModalItemPedido } from "./style";

export const ItemPedido = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1)
  return (
    <ModalItemPedido>
      <td>
        {produto.nomeProduto}
      </td>
      <td>
        {produto.descricaoProduto}
      </td>
      <td>
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} min={0} max={produto.qtdEstoque}></input>
      </td>
      <td>
        {produto.valorUnitario}
      </td>
      <td>
        {quantidade * produto.valorUnitario}
      </td>
    </ModalItemPedido>

  )
}