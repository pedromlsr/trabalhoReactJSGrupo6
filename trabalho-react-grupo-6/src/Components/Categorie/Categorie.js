import React, { useEffect, useState } from "react";
import { CategorieArea } from "./Styles";
import { ModelCard } from "../Card/Card"
import { CategorieTitleContainer } from "../CategorieTitle/CategorieTitle";
import { api } from "../../Service/api"

export const CategorieContainer = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const response = await api.get('categoria');
      setCategorias(response.data)
    }
    getData()
  },[categorias])  

  function verificarQtdProdutos(itemCat) {

    if (itemCat.produtoList.length <= 4) {
      return (
        <div className="CardsContainer">
          {itemCat.produtoList.map((itemProd) => (
            <ModelCard imagem={itemProd?.nomeImagemProduto} nomeProduto={itemProd?.nomeProduto} />
          ))}
        </div>
      )
    } else {
      return (
        <div className="CardsSlider">
          {itemCat.produtoList.map((itemProd) => (
            <ModelCard imagem={itemProd?.nomeImagemProduto} nomeProduto={itemProd?.nomeProduto} />
          ))}
        </div>
      )
    }
  }

  return (
    categorias?.map((itemCat) => itemCat.produtoList.length !== 0 && (
      <CategorieArea>
        <CategorieTitleContainer title={itemCat.nomeCategoria} />
        {verificarQtdProdutos(itemCat)}
      </CategorieArea>
    ))
  )
}

