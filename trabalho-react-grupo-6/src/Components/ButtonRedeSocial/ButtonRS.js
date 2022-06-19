import React from "react";

import { Container, Logo } from "./style";

export const ButtonRS = (props) => {
  return (
    <Container>
      <Logo>{props.logo}</Logo>
    </Container>
  );
};
