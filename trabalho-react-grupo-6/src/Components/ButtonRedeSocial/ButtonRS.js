import React from "react";

import { Container, Logo } from "./style";

export const ButtonRS = (props) => {
  return (
    <Container className = "container">
      <Logo className = "logo">{props.logo}</Logo>
    </Container>
  );
};
