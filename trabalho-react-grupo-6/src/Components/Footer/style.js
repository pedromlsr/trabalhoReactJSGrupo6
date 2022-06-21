import styled from 'styled-components'

export const Container = styled.div`
   padding: 0;
   margin-bottom: 2.5rem;
   box-sizing: border-box;
   height: 5rem;
   width: 100%;
   background-color: ${props => props.bgColor};
   display: flex;
   justify-content: space-around;
   align-items: center;
`

export const Div = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`

export const Icon = styled.img`
   width: 3rem;
   height: 3rem;
`

export const Sep = styled.div`
   width: 0.3rem;
   height: 3rem;
   background-color: ${props => props.bgColor};
   border-radius: 1rem;
   box-shadow: 0.2rem 0.2rem 0.4rem ${props => props.bgColor};
`

export const Text = styled.p`
   color: ${props => props.txtColor};
   font-size: 1.3rem;
   font-weight: 700;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`