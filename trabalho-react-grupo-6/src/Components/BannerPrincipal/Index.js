import React from "react";
import { BannerContainer, ImgBannerEstrela, ImgBannerJogo } from "./style";
import BannerJogo from "../../Assets/Img/imagem-jogo-mes.png"
import BannerEstrela from "../../Assets/Img/etiqueta-imagem-jogo.png"

function BannerPrincipal() {
  return (
    <>
      <BannerContainer>
            <ImgBannerJogo src={BannerJogo}/>
            <ImgBannerEstrela src={BannerEstrela}/>
      </BannerContainer>
    </>
  );
}

export default BannerPrincipal;
