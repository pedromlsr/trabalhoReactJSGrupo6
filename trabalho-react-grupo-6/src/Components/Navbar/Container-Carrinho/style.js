import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: flex-end;
  width: 4.5rem;
  `;

export const CarrinhoImg = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2e51;
  border: none;
  height: 3.5rem;
  width: 5rem;
  &:hover {
    background-color: #686db1;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  width: 2rem;
  height: 2rem;
  `;

export const Contador = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  background-color: #e93613;
  border-radius: 50%;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.8rem;
  `;

export const Quantidade = styled.p`
  color: #fff;
  `;