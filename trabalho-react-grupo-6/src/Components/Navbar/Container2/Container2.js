import React from "react";

import { ButtonRS } from "../../ButtonRedeSocial/ButtonRS";
import { ButtonBusca} from "../../ButtonBusca/ButtonBusca";

import IG from "../../../Assets/Icons/instagram.svg";
import FB from "../../../Assets/Icons/facebook.svg";
import Twttr from "../../../Assets/Icons/twitter.png";

import { Container, ContainerButtons, Logo } from "./style";
export const Container2 = () => {
  return (
    <Container>
      <ContainerButtons>
        <ButtonBusca placeholder="O que procura?"></ButtonBusca>
        <ButtonRS logo={<Logo src={IG} />} />
        <ButtonRS logo={<Logo src={FB} />} />
        <ButtonRS logo={<Logo src={Twttr} />} />
      </ContainerButtons>
    </Container>
  );
};
