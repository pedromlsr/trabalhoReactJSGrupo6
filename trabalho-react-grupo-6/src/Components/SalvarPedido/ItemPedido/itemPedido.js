import React from "react";
import { ModalItemPedido, Container, TituloContainer, ContentContainer } from "./style";

export const ItemPedido = ({ produto }) => {

  return (
    <ModalItemPedido>
      <Container>
        <TituloContainer>
          Produto:
        </TituloContainer>
        <ContentContainer>
          {produto.nomeProduto}
        </ContentContainer>
      </Container>
      <Container>
        <TituloContainer>
          Descrição:
        </TituloContainer>
        <ContentContainer>
          {produto.descricao}
        </ContentContainer>
      </Container>
      <Container>
        <TituloContainer>
          Quantidade:
        </TituloContainer>
        <ContentContainer>
          <input type="number" required></input>
        </ContentContainer>
      </Container>
      <Container>
        <TituloContainer>
          Valor Unitário:
        </TituloContainer>
        <ContentContainer>
          {produto.valorProduto}
        </ContentContainer>
      </Container>
      <Container>
        <TituloContainer>
          Valor Total:
        </TituloContainer>
      </Container>
    </ModalItemPedido>
  )
}