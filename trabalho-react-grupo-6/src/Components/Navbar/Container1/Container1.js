import React from "react";
import { ButtonNav } from "../../ButtonNavegacao/ButtonNav";


import { Container} from "./style";
export const Container1 = () => {
  return (
    <Container>
        <ButtonNav nome="Home" cor="#F7B048" borderRadius="50px 0 0 50px"></ButtonNav>
        <ButtonNav nome="Cadastre-se" cor="#EE7057" ></ButtonNav>
        <ButtonNav nome="Área Interna" cor="#EE7057" ></ButtonNav>
    </Container>
  );
};
