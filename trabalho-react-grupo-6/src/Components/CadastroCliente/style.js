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
  background: #ee7057;
  color: #2B2E51;
  padding: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius:0 0.5rem 2rem 0;
  width: 40%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  box-shadow: 2px 3px 4px 1px #00000050,
    inset -1px 2px 4px 0px #fff,
    inset 2px -2px 4px 0px #00000050;
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
  border-radius: 50px;
  border: 2px solid #2b2e51;
  margin: 0.3rem;
  background: #f7b048;
  box-shadow: 2px 2px 2px 0.5px #ffffff50,
    -2px -2px 2px 0.5px #ffffff50,
    inset 2px 2px 4px 0px #00000050;
  ::placeholder {
    padding-left: 1rem;
  }
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
  box-shadow: 2px 3px 4px 1px #00000050,
    inset -1px 2px 4px 0px #fff,
    inset 2px -2px 4px 0px #00000050;
  &:hover {
    background-color: #f7b048;
  }
  &:active {
    box-shadow: 2px 2px 4px 1px #ffffff50, inset 2px 2px 4px 0px #000000;
    background-color: #f7a328;
  }
  
`;
