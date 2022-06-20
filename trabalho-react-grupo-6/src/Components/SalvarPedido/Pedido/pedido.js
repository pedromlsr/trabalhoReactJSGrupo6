import React from "react";
import { InputButton } from "../../CadastroCliente/style";
import { ItemPedido } from "../ItemPedido/itemPedido";
import { AreaPedido, AreaProdutos, Titulo } from "./style";


export const PostPedido = () => {

  const items = [{ nomeProduto: "Produto 1", descricao:"Desc prod 1",valorProduto:150.00 }, { nomeProduto: "Produto2",descricao:"Desc prod 2",valorProduto:50.00 }, { nomeProduto: "Produto 3", descricao:"Desc prod 3",valorProduto:199.90 }

  ];

  return (
    <AreaPedido>
      <Titulo>
        <h1>Carrinho de Compras</h1>
      </Titulo>
      <AreaProdutos>
        {items?.map((item) => (
          <ItemPedido produto={item} />
        ))}
      </AreaProdutos>
      <InputButton type="submit" value="Confirmar Pedido" />
    </AreaPedido>
  )
}