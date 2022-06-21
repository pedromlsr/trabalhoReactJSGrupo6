import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "../Pages/NotFound/Index";
import { Home } from "../Pages/Home/Index";
import { AreaInterna } from "../Pages/CadastroCatProd/Index";
import { CadastroCliente } from "../Pages/CadastroCliente/Index";
import { Pedido } from "../Pages/Pedido";

export const Root = () => {
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/cadastro-cliente" element={<CadastroCliente />}/>
        <Route path="/cadastro-cat-prod" element={<AreaInterna />}/>
        <Route path="/pedido" element={<Pedido />}/>
      </Routes>
    </BrowserRouter>
  );
};