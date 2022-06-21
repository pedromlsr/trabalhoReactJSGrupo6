import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";

import { Container, CarrinhoImg, Logo, Contador, Quantidade } from "./style";

import Carrinho from "../../../Assets/Icons/carrinho-de-compras.svg";

import {CartItensContext} from "../../../Context/data"
export const ContainerCarrinho = () => {
  let navigate = useNavigate();

  function handleNavigate(){
    navigate("/pedido");
  }

  const { cartItens } = useContext(CartItensContext)
  return (
    <Container>
      <CarrinhoImg onClick={handleNavigate}>
        <Logo src={Carrinho} />
      </CarrinhoImg>
      <Contador>
        <Quantidade>{cartItens.length}</Quantidade>
      </Contador>
    </Container>
  );
};
