import React from "react";
import { CategorieArea } from "./Styles";
import { ModelCard } from "../Card/Card"
import { CategorieTitleContainer } from "../CategorieTitle/CategorieTitle";

export const CategorieContainer = () => {

  const api = [
    {id: 0, title: 'teste', img: "https://files.tecnoblog.net/wp-content/uploads/2020/03/google-imagens-700x394.jpg"},
    {id: 1, title: 'teste1', img: "https://files.tecnoblog.net/wp-content/uploads/2020/03/google-images-mobile-to-desktop-700x471.jpg"},
    {id: 2, title: 'teste2', img: "https://files.tecnoblog.net/wp-content/uploads/2020/03/google-images-safari-700x505.jpg"},
    {id: 3, title: 'teste2', img: "https://files.tecnoblog.net/wp-content/uploads/2020/03/google-images-safari-700x505.jpg"}
  ]

  return (
    <CategorieArea>
      <CategorieTitleContainer title="CATEGORIA 1"/>
      <div className="CardsContainer">
        {api?.map((item, i) => (
          <ModelCard imagem={item?.img}/>
        ))}
      </div>
    </CategorieArea>
  )
}