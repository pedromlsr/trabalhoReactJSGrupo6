import styled from "styled-components";

export const Container = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    align-items: center;
    justify-content: center;
    color: ${props => props.cor};
    font-family: monospace;
    font-size: 1.3rem;
    margin: 1rem 0;
    padding: 0 1.5rem;
    height: 3.5rem;
    &:hover {
        text-decoration: underline;
        background-color: #686DB1;
        border-radius: ${props => props.borderRadius};
    }
`