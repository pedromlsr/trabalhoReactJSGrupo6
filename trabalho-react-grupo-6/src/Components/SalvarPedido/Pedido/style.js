import styled from "styled-components";

export const AreaPedido = styled.div`
  display: flex;
  width:70%;
  margin: 5rem auto;
  margin: 12rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  color: #f7b048;
  font-family: verdana;
  /* font-weight: bold; */
  background: #2b2e51;
  border: 1px solid #ee7057;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #f7b048; 
`
export const TituloPrincipal = styled.div `
  display: flex ;
  justify-content: center ;
  align-items: center ;
  padding: 0.5rem;
  margin-left: -3rem;
  background-color: #ee7057;
  color: #2B2E51;
  font-size: 1.8rem;
  font-weight: bold;
  width: 40%;
  border-radius:0 0.5rem 2rem 0 ;
  box-shadow: 2px 3px 4px 1px #00000050,
    inset -1px 2px 4px 0px #fff,
    inset 2px -2px 4px 0px #00000050;
`

export const Titulo = styled.th` 
  color:#f7b048;
  font-weight: bold;
  font-size:1.5rem ;
  padding: 0.5rem;
  text-shadow: 2px 2px 2px #000;
  border-bottom: 3px solid #ee7057;
`;

export const AreaProdutos = styled.div`
  display: flex ;
  justify-content: center ;
  align-items: center ;
  margin-top: 2rem ;
  width:100%;
  `

export const Tabela = styled.table`
  text-align:left ;
  width:100%;

  tr{
    height:2rem ;
    border-radius: 50px;
    
}  
  `

export const Total = styled.div` 
  padding: 0.5rem;
  margin: 1rem;
  background-color: #f7b048;
  font-weight: bold;
  color: #2b2e51;
  border-radius: 20px;
  box-shadow: 2px 3px 4px 1px #00000050,
    inset -1px 2px 4px 0px #fff,
    inset 2px -2px 4px 0px #00000050;
`

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