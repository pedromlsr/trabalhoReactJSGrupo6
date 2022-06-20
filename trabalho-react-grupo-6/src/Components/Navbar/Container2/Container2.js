import React from "react";
import { ExternalLink } from "react-external-link";

import { ButtonRS } from "../../ButtonRedeSocial/ButtonRS";

import IG from "../../../Assets/Icons/instagram.svg";
import FB from "../../../Assets/Icons/facebook.svg";
import Twttr from "../../../Assets/Icons/twitter.png";

import { Container, ContainerButtons, Logo } from "./style";
export const Container2 = () => {
  return (
    <Container>
      <ContainerButtons>
        <ExternalLink href="https://instagram.com">
          <ButtonRS logo={<Logo src={IG} />} />
        </ExternalLink>
        <ExternalLink href="https://facebook.com">
          <ButtonRS logo={<Logo src={FB} />} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com">
          <ButtonRS logo={<Logo src={Twttr} />} />
        </ExternalLink>
      </ContainerButtons>
    </Container>
  );
};
