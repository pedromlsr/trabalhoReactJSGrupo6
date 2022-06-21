import React from "react";
import {ContainerExterno, Container, Complemento, Logo, Titulo} from "./style";
import { NavBar } from "../../Components/Navbar/navbar";
import { PostPedido } from "../../Components/SalvarPedido/Pedido/pedido";

import LogoImg from "../../Assets/Img/logo-cor.png";

export const Pedido = () => {

  return (
    <>
      <ContainerExterno>
        <Container>
          <NavBar />
          <Complemento/>
        </Container>
      </ContainerExterno>
      <Titulo>Foldbreakers Store <Logo src={LogoImg}/>Carrinho de Compras</Titulo>
      <PostPedido/>
    </>
  )
}
