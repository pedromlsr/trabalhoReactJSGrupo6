import React, { useEffect, useState, useRef } from "react";
import { CategorieArea } from "./Styles";
import { ModelCard } from "../Card/Card"
import { CategorieTitleContainer } from "../CategorieTitle/CategorieTitle";
import { api } from "../../../Service/api"

export const CategorieContainer = () => {
  const [categorias, setCategorias] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('categoria');
      setCategorias(response.data)
    }
    getData()
  }, [])

  function verificarQtdCards(itemCat) {
    if (itemCat.produtoList.length <= 4) {
      return (<div className="CardsContainer" ref={carousel} >
        {itemCat.produtoList.map((itemProd) => (
          <ModelCard produto={itemProd} />
        ))}
      </div>)
    } else {
      return (<div className="CardsSlider" ref={carousel} >
        {itemCat.produtoList.map((itemProd) => (
          <ModelCard produto={itemProd} />
        ))}
      </div>)
    }
  }

  return (
    categorias?.map((itemCat) => itemCat.produtoList.length !== 0 && (
      <CategorieArea >
        <CategorieTitleContainer title={itemCat.nomeCategoria} />
        {verificarQtdCards(itemCat)}
      </CategorieArea>
    ))

  )
}

