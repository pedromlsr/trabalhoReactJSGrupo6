import React from "react";
import BannerPrincipal from "../../Components/BannerPrincipal/Index";
import { BannerInfoCompras } from "../../Components/BannerInfoCompras/Index";
import { CategorieContainer } from "../../Components/SectionCategoria/Categorie/Categorie";
import { NavBar } from "../../Components/Navbar/navbar";

export const Home = () => {
  return (
    <>
      <NavBar/>
      <BannerPrincipal/>
      <BannerInfoCompras/>
      <CategorieContainer />
    </>
  )
}