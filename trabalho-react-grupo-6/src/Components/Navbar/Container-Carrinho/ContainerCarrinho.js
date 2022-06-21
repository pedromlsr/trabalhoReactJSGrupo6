import React,{useContext} from "react";

import { Container, CarrinhoImg, Logo, Contador, Quantidade } from "./style";

import Carrinho from "../../../Assets/Icons/carrinho-de-compras.svg";

import {CartItensContext} from "../../../Context/data"

export const ContainerCarrinho = () => {
  const { cartItens } = useContext(CartItensContext)
  return (
    <Container>
      <CarrinhoImg>
        <Logo src={Carrinho} />
      </CarrinhoImg>
      <Contador>
        <Quantidade>{cartItens.length}</Quantidade>
      </Contador>
    </Container>
  );
};
