import styled from 'styled-components';

export const CardArea = styled.div`
  display: flex ;
  flex-direction: column;
  width:20%;
  height:85% ;
  background-color: #686DB1 ;
  border-radius: 2rem ;
  padding: 1rem ;
  &:hover{
    transform:scale(1.05);
    box-shadow:0.5rem 0.5rem 0.5rem #F7B048;
  }
  
.imagem {
  display:flex;
  justify-content: center;
  align-items: center ;
  border-radius: 1rem ;
  background-color: #eeee ;
  height: 80% ;  
}

img {
  width:100%;
  height:100% ;
  border-radius: 1rem ;
}

button {
  border: none ; 
  height: 20% ;
  background-color: #2B2E51 ;
  font-size: 25px ;
  font-weight: bolder ;
  color:#EE7057; 
  margin-top:1rem;
  border-radius: 1rem ;
  &:hover{
    background-color:#F7B048 ;
    color: #2B2E51;    
    cursor:pointer;
  }
}
`;
