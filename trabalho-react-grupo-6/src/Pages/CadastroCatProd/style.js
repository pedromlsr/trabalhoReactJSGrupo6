import styled from "styled-components";

export const ContainerExterno = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const ContainerInterno = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 2rem auto;
`;

export const Complemento = styled.div`
  margin-top: -7rem;
  width: 2rem;
  height: 3.5rem;
  border-radius: 0 50px 50px 0;
  background-color: #2b2e51;
`;

export const Titulo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  font-size: 2rem;
  color: #f7b048;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  margin-top: 6rem;
  padding: 1rem 0;
`;

export const Logo = styled.img`
  padding: 0 0.5rem;
  height: 3rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 12rem;
  width: 80%;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: auto;
  padding: 1rem;
  list-style: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: ${(props) => props.width};
  margin-top: 1rem;
  color: #f7b048;
  background: #2b2e51;
  border: 2px solid #f7b048;
  border-radius: 10px;
  `;

export const Li = styled.li `
  display: flex;
  list-style-type: none;
  border-bottom: 1px solid #f7b048; 
`

export const Text = styled.p `
  margin: 0 0.3rem 0.3rem 0.5rem;
  font-weight: bold;
  color: #ee7057;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 50%;
  margin: auto;
  color: #fff;
  margin-bottom: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const H4 = styled.h4`
  text-align: center;
  color: #ee7057;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 1rem;
`;

export const Formulario = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  color: #f7b048;
  font-weight: bold;
  background: #2b2e51;
  border: 1px solid #ee7057;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #f7b048;
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  width: ${(props) => props.width};
  border-radius: 50px;
  border: 2px solid #2b2e51;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.3rem;
  background: #f7b048;
  box-shadow: 2px 2px 2px 0.5px #ffffff50,
    -2px -2px 2px 0.5px #ffffff50,
    inset 2px 2px 4px 0px #00000050;
  &:focus {
    border: 4px solid #f7b048;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputButton = styled.button`
  cursor: pointer;
  background-color: #ee7057;
  height: 2rem;
  width: 10rem;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 3px 4px 1px #00000050,
    inset -1px 2px 4px 0px #fff,
    inset 2px -2px 4px 0px #00000050;
  &:hover {
    background-color: #f7b048;
  }
  &:active {
    box-shadow: 2px 2px 4px 0px #ffffff50, inset 2px 2px 4px 0px #000000;
    background-color: #f7a328;
  }
`

export const ContainerOrganizacao = styled.div `
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  justify-content: ${(props) => props.alinhamento};
`

export const Label = styled.label `
  color: #f7b048;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
`