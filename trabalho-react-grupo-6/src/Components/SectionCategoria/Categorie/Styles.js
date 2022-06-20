import styled from "styled-components";

export const CategorieArea=styled.div`

.CardsContainer {
  display:flex;  
  justify-content:center ;
  align-items: center ;
  height:30rem;
  overflow-x: auto ;
} 
.CardsContainer::-webkit-scrollbar{
  background-color: #141529;
  height:0.5rem ;  
  }
  
.CardsContainer::-webkit-scrollbar-thumb{
  background-color:  #686DB1;
  border-radius:1rem ; 
  }

.buttons {
  width:100%;
  text-align: center ;
}

.buttons button{
  background-color: transparent ;
  border: none;
  cursor: pointer;
}
.buttons button:first-child img {
  transform:rotate(180deg);
}
`;