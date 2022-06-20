import React from "react";

import { Container, CarrinhoImg, Logo, Contador, Quantidade } from "./style";

import Carrinho from "../../../Assets/Icons/carrinho-de-compras.svg";

export const ContainerCarrinho = () => {
  return (
    <Container>
      <CarrinhoImg>
        <Logo src={Carrinho} />
      </CarrinhoImg>
      <Contador>
        <Quantidade>1</Quantidade>
      </Contador>
    </Container>
  );
};
