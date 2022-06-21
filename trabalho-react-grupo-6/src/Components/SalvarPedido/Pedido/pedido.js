import React,{useContext} from "react";
import { CartItensContext } from "../../../Context/data";
import { InputButton } from "../../CadastroCliente/style";
import { ItemPedido } from "../ItemPedido/itemPedido";
import { AreaPedido, AreaProdutos, Titulo } from "./style";


export const PostPedido = () => {

  const {cartItens} = useContext(CartItensContext)
  
  return (
    <AreaPedido>
      <Titulo>
        <h1>Carrinho de Compras</h1>
      </Titulo>
      <AreaProdutos>
        {cartItens?.map((item) => (
          <ItemPedido produto={item} />
        ))}
      </AreaProdutos>
      <InputButton type="submit" value="Confirmar Pedido" />
    </AreaPedido>
  )
}