import React from "react";
import { Link } from "react-router-dom";
import { ButtonNav } from "../../ButtonNavegacao/ButtonNav";

import { Container } from "./style";
export const Container1 = () => {
  return (
    <Container>
      <Link to="/">
        <ButtonNav
          nome="Home"
          cor="#F7B048"
          borderRadius="50px 0 0 50px"
        ></ButtonNav>
      </Link>
      <Link to="/cadastro-cliente">
        <ButtonNav nome="Cadastre-se" cor="#EE7057"></ButtonNav>
      </Link>
      <Link to="/cadastro-cat-prod">
      <ButtonNav nome="Área Interna" cor="#EE7057"></ButtonNav>
      </Link>    
    </Container>
  );
};
