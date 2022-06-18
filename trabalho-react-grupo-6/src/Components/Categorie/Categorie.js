import React from "react";
import { CategorieArea } from "./Styles";
import { ModelCard } from "../Card/Card"
import { CategorieTitleContainer } from "../CategorieTitle/CategorieTitle";

export const CategorieContainer = () => {

  return (
    <CategorieArea>
      <CategorieTitleContainer />
      <div className="CardsContainer">
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
      </div>
    </CategorieArea>

  )

}