import React from "react";

import { Container } from "./style";

export const ButtonNav = (props) => {
  return (
    <Container cor={props.cor} borderRadius={props.borderRadius}>
      {props.nome}
    </Container>
  );
};
