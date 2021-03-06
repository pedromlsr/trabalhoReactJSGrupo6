import React, { useState, useContext} from "react";
import { ModalItemPedido, Input, Td, Button } from "./style";
import { CartItensContext } from "../../../Context/data";

export const ItemPedido = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1)
  const { cartItens,valorTotal} = useContext(CartItensContext)
  
  function excluir(exclusao) {
    cartItens.splice(cartItens.findIndex(produto => produto.idProduto === exclusao.idProduto), 1)
  }
  
  produto.quantidade=quantidade  
   valorTotal(cartItens)  
     
  return (
    <ModalItemPedido>
      <td>
        {produto.nomeProduto}
      </td>
      <td>
        {produto.descricaoProduto}
      </td>
      <Td>
        <Input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} min={0} max={produto.qtdEstoque}></Input>
         </Td>
      <td>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(produto.valorUnitario)}

      </td>
      <td>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(quantidade * produto.valorUnitario)}

      </td>
      <td>
        <Button onClick={() => excluir(produto)}>X</Button>
      </td>
    </ModalItemPedido>

  )
}