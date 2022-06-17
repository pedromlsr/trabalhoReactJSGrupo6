import styled from "styled-components";

export const Container = styled.button `
    display: flex;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    background-color: #FFB84F;
    box-shadow: 2px 2px 4px 1px #00000025, 
        inset 2px 2px 4px 0px #ffffff, 
        inset -2px -2px 4px 0px #00000025;
    cursor: pointer;
    &:hover {
        background-color: #faae3e;
    }
`