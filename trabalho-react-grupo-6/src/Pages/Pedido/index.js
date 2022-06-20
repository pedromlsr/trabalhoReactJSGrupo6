import React from "react";
import "./style";
import { NavBar } from "../../Components/Navbar/navbar";
import { PostPedido } from "../../Components/SalvarPedido/Pedido/pedido";

export const Pedido = () => {

  return (
    <>
      <NavBar />
      <PostPedido/>
    </>
  )
}
