import React, { useEffect, useState, useRef } from "react";
import { CategorieArea } from "./Styles";
import { ModelCard } from "../Card/Card"
import { CategorieTitleContainer } from "../CategorieTitle/CategorieTitle";
import { api } from "../../../Service/api"
import buttonImage from "../../../Assets/Img/216151_right_chevron_icon.png"

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

  const handleLeftClick = (e) => {
    carousel.current.scrollLeft -= 340;
    console.log(carousel.current.scrollLeft)
  };

  const handleRightClick = (e) => {
    carousel.current.scrollLeft += 340;
    console.log(carousel.current.scrollLeft)
  };

  return (
    categorias?.map((itemCat) => itemCat.produtoList.length !== 0 && (
      <CategorieArea >
        <CategorieTitleContainer title={itemCat.nomeCategoria} />
        <div className="CardsContainer" ref={carousel} >
          {itemCat.produtoList.map((itemProd) => (
            <ModelCard imagem={itemProd?.nomeImagemProduto} nomeProduto={itemProd?.nomeProduto} valor={itemProd?.valorUnitario} />
          ))}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}><img src={buttonImage} alt="Scroll-Left" /></button>
          <button onClick={handleRightClick}><img src={buttonImage} alt="Scroll-Right" /></button>
        </div>
      </CategorieArea>
    ))
  )
}

