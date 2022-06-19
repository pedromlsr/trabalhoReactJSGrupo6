import React from "react";

import { FormularioCliente } from "../../Components/CadastroCliente/CadastroCliente";
import { NavBar } from "../../Components/Navbar/navbar";

export const CadastroCliente = () => {
  return (
    <>
      <NavBar />
      <FormularioCliente />
    </>
  );
};
