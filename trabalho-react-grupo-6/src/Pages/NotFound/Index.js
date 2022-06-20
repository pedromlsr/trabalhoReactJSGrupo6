import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../../Assets/Img/logo-cor.png";

import { Container, Titulo, TextoLink, Texto, Logo } from "./style";
export const NotFound = () => {
  return (
    <Container>
      <Logo src={LogoImg}></Logo>
      <Texto>Sorry!</Texto>
      <Titulo>Ops... não encontramos o recurso que você procura</Titulo>
      <Texto>
        Verifique se o endereço que deseja está escrito corretamente ou volte
        para nossa{" "}
        <Link to="/">
          <TextoLink>página inicial</TextoLink>
        </Link>{" "}
        e use os menus de navegação para uma seção específica.
      </Texto>
    </Container>
  );
};