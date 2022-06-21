import React from "react";
import BannerPrincipal from "../../Components/BannerPrincipal/Index";
import { BannerInfoCompras } from "../../Components/BannerInfoCompras/BannerInfoCompras";
import { CategorieContainer } from "../../Components/SectionCategoria/Categorie/Categorie";
import { NavBar } from "../../Components/Navbar/navbar";
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"

export const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <BannerPrincipal/>
      <BannerInfoCompras/>
      <CategorieContainer />
      <Footer />
    </>
  )
}