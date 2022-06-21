import React, { useContext } from "react";
import { CartItensContext } from "../../../Context/data";
import { InputButton } from "../../CadastroCliente/style";
import { ItemPedido } from "../ItemPedido/itemPedido";
import { AreaPedido, AreaProdutos, Tabela, Titulo, Total } from "./style";
import { api } from "../../../Service/api";


export const PostPedido = () => {

  const { cartItens } = useContext(CartItensContext)

  const calcularTotal = () => {
    let total = 0;
    cartItens?.map((item) => (
      total += item.quantidade * item.valorUnitario
      )
      )
    return (total)
  }
  const finishBuy = (cartItens) => {
    try {
      const itemPedidoList = []
      cartItens?.map((item) => {
        const produto = {
          produto: { idProduto: item.idProduto },
          quantidade: item.quantidade,
          precoVenda: item.valorUnitario,
          percentualDesconto: 0
        };
        itemPedidoList.push(produto);
      })
      const body = { idCliente: 1, valorLiqTotal: 0, itemPedidoList };
      api.post('pedido', body);
      alert('Pedido finalizado com sucesso!')
    } catch (err) {
      console.log(err)
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
          <Total>Total:
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(calcularTotal())}</Total>
        </Tabela>
      </AreaProdutos>
      <InputButton onClick={() => finishBuy(cartItens)} type="submit" value="Confirmar Pedido" />
    </AreaPedido>
  )
}