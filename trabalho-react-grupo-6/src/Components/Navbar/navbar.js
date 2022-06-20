import React from "react";

import { ContainerCarrinho } from "./Container-Carrinho/ContainerCarrinho";
import { Container1 } from "./Container1/Container1";
import { Container2 } from "./Container2/Container2";

import { Navbar } from "./style";

export const NavBar = () => {
  return (
    <Navbar>
      <Container2></Container2>
      <Container1></Container1>
      <ContainerCarrinho></ContainerCarrinho>
    </Navbar>
  );
};
