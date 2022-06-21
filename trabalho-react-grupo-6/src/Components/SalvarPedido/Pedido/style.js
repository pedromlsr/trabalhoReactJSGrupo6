import styled from "styled-components";

export const AreaPedido = styled.div`
  width:70%;
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
`
export const Titulo = styled.th` 
  color:#f7b048;
  font-weight: bold;
  font-size:1.5rem ;
`
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
  height:5rem ;
}  

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