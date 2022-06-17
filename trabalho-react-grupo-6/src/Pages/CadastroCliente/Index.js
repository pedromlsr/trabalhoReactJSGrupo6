import React from "react";
import { FormularioCliente } from "../../Components/CadastroCliente/CadastroCliente";

import { NavBar } from "../../Components/Navbar/navbar";

document.title = "Cadastro de Cliente"

export const CadastroCliente = () => {
  return (
    <>
      <FormularioCliente/>
    </>
  );
};
