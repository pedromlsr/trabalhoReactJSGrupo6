import React from "react";
import BannerPrincipal from "../../Components/BannerPrincipal/Index";
import { BannerInfoCompras } from "../../Components/BannerInfoCompras/Index";
import { CategorieContainer } from "../../Components/Categorie/Categorie";
import { NavBar } from "../../Components/Navbar/navbar";
import { Header } from "../../Components/Header/Header";

export const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <BannerPrincipal/>
      <BannerInfoCompras/>
      <CategorieContainer />
    </>
  )
}