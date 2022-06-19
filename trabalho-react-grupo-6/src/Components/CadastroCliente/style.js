import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Titulo = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Formulario = styled.form`
  margin: 5rem auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f7b048;
  font-weight: bold;
  background: #2b2e51;
  border: 1px solid #ee7057;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #f7b048;
`;

export const ContainerInterno = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  border-radius: 10px;
  border: 2px solid #2b2e51;
  margin: 0.1rem;
  &:focus {
    border: 4px solid #f7b048;
  }
`;

export const InputButton = styled.input`
  cursor: pointer;
  background-color: #ee7057;
  height: 2rem;
  width: 10rem;
  border-radius: 10px;
  border: 2px solid #2b2e51;
  margin: 1rem;
  &:hover {
    background-color: #f7b048;
  }
`;
