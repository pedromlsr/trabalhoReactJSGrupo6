import styled from "styled-components";

export const Container = styled.input `
    display: flex;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    background-color: #FFB84F;
    box-shadow: 2px 2px 4px 1px #fff, 
        inset 2px 2px 4px 0px #00000025, 
        inset -1px -1px 4px 0px #ffffff25;
    cursor: pointer;
    transition: width 0.4s ease-in-out;
    &:focus {
       width: 30rem;
       border-radius: 50px;
    }
`