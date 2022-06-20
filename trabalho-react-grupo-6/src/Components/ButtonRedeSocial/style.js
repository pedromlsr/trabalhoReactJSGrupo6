import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  background-color: #ffb84f;
  box-shadow: 2px 2px 4px 1px #00000025, inset 2px 2px 4px 0px #fff,
    inset -2px -2px 4px 0px #00000025;
  cursor: pointer;
  &:hover {
    background-color: #faae3e;
  }
  &:active {
    box-shadow: 2px 2px 4px 1px #ffffff90, inset 2px 2px 4px 0px #00000025;
    background-color: #f7a328;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.4rem;
  &:active {
    transform: scale(0.9);
  }
`;
