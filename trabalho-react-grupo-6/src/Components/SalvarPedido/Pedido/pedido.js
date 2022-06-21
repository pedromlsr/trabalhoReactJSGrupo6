import React, { useContext} from "react";
import { CartItensContext } from "../../../Context/data";
import { InputButton } from "../../CadastroCliente/style";
import { ItemPedido } from "../ItemPedido/itemPedido";
import { AreaPedido, AreaProdutos, Tabela, Titulo, Total } from "./style";
import { api } from "../../../Service/api";


export const PostPedido = () => {
  const { cartItens } = useContext(CartItensContext)
  let pedido = {
    idCliente: 6,
    valorLiqTotal: 0.0,
    itemPedidoList: [
      {
        produto: {
          idProduto: 2,
          nomeProduto: "Produto 2",
          descricaoProduto: "Produto 2"
        },
        quantidade: 10,
        precoVenda: 199.90,
        percentualDesconto: 0
      },
      {
        produto: {
          idProduto: 3,
          nomeProduto: "Produto 3",
          descricaoProduto: "Produto 3"
        },
        quantidade: 10,
        precoVenda: 99.90,
        percentualDesconto: 0
      }
    ]
  }

  const savePedido = async (pedido) => {
    try {
      await api.post('pedido', pedido)
      alert('Pedido finalizado com sucesso!')
    } catch (error) {
      console.log(error)
      alert(
        error.response.data.message + ' ' +
        error.response.data.details
      )
    }
  }

  return (
    <AreaPedido>
      <Titulo>
        <h1>Carrinho de Compras</h1>
      </Titulo>
      <AreaProdutos>
        <Tabela>
          <tr>
            <Titulo> Produto:</Titulo>
            <Titulo> Descrição:</Titulo>
            <Titulo> Quantidade:</Titulo>
            <Titulo> Valor Unitário:</Titulo>
            <Titulo> Valor Total:</Titulo>
          </tr>
          {cartItens?.map((item) => (
            <ItemPedido produto={item} />
          ))}
          <Total>Total:</Total>
        </Tabela>
      </AreaProdutos>
      <InputButton onClick={() => savePedido(pedido)} type="submit" value="Confirmar Pedido" />
    </AreaPedido>
  )
}