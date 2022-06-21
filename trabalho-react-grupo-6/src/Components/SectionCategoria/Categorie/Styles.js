import styled from "styled-components";

export const CategorieArea=styled.div`

.CardsContainer {
  display:flex;  
  justify-content:center ;
  align-items: center ;
  height:30rem;
  overflow-x: auto ;
} 

.CardsSlider {
  display:flex;  
  justify-content:space-between ;
  align-items: center ;
  height:30rem;
  overflow-x: auto ;
} 

.CardsSlider::-webkit-scrollbar{
  background-color: #141529;
  height:0.5rem ;  
  }
  
.CardsSlider::-webkit-scrollbar-thumb{
  background-color:  #686DB1;
  border-radius:1rem ; 
  }

`;