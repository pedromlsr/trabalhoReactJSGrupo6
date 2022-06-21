import styled from 'styled-components';

export const CardArea = styled.div`
  width:250px;
  height:300px ;
  background-color: #686DB1 ;
  border-radius: 2rem ;
  padding: 1rem ;
  flex:none;
  margin:0 1.3rem;
  &:hover{
    transform:scale(1.05);
    box-shadow:0.5rem 0.5rem 0.5rem #F7B048;
  }
  
.content{
  display: flex ;
  justify-content: center ;
  flex-direction: column ;
  width:100%;
  height:100% ;
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
  object-fit: cover ;
  border-radius: 1rem ;
}

.nomeProduto, .valor{
text-align: center ;
color:#2B2E51 ;
font-size:1.3rem;
font-weight: bolder ;
margin-top:0.5rem;
}
.valor{
  color:#EE7057;
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
