import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 3rem;
`;

export const Formulario = styled.form`
  margin-top: 10rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #f7b048;
  font-weight: bold;
  background: #2b2e51;
  border: 1px solid #ee7057;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #f7b048;
`;

export const Titulo = styled.h1`
  background: #F7B048;
  color: #2B2E51;
  padding: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius:0 0.5rem 2rem 0;
  width: 40%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
`;

export const ContainerInterno = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => props.alinhamento};
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  width: ${(props) => props.largura};
  border-radius: 10px;
  border: 2px solid #2b2e51;
  margin: 0.3rem;
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
  border: none;
  margin: 1rem;
  &:hover {
    background-color: #f7b048;
  }
`;
