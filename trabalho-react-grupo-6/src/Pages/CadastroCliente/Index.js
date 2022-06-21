import React from "react";

import { FormularioCliente } from "../../Components/CadastroCliente/CadastroCliente";
import { NavBar } from "../../Components/Navbar/navbar";

import LogoImg from "../../Assets/Img/logo-cor.png";

import {ContainerExterno, Container, Complemento, Titulo, Logo } from "./style";

export const CadastroCliente = () => {
  return (
    <>
      <ContainerExterno>
        <Container>
          <NavBar />
          <Complemento/>
        </Container>
      </ContainerExterno>
      <Titulo>Foldbreakers Store <Logo src={LogoImg}/>  Cadastro de Cliente</Titulo>
      <FormularioCliente />
    </>
  );
};
