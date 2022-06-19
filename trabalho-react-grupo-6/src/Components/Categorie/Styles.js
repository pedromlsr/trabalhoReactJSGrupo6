import styled from "styled-components";

export const CategorieArea=styled.div`

.CardsContainer {
  display:flex;
  justify-content: space-evenly;
  align-items: center ;
  height: 25rem;
  padding: 2rem 0;
} 

.CardsSlider {
  display:grid;
  grid-auto-flow: column ;
  gap:3.5rem;
  overflow-y:auto ;
  overscroll-behavior-x:contain ;
  align-items: center ;
  overflow-x: scroll;
  scroll-snap-type: x mandatory ;
  height: 25rem;
  padding: 2rem 0;
  margin-bottom: 2rem ;
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