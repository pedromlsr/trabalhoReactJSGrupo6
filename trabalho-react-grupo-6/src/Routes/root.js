import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "../Pages/NotFound/Index";
import { Home } from "../Pages/Home/Index";

export const Root = () => {
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};