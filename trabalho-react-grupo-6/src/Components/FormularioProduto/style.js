import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
  width: 50%;
  margin: auto;
  padding: 1rem;
  color: #f7b048;
  font-weight: bold;
  background: #2b2e51;
  border: 1px solid #ee7057;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px #f7b048;
`

export const Input = styled.input`
  height: 2rem;
  width: ${(props) => props.width};
  border-radius: 10px;
  border: 2px solid #2b2e51;
  margin: 0.3rem;
  &:focus {
    border: 4px solid #f7b048;
  }
`;

export const TextArea = styled.textarea`
  height: 5rem;
  border-radius: 10px;
  border: 2px solid #2b2e51;
  margin: 0.3rem;
  &:focus {
    border: 4px solid #f7b048;
  }
`;

export const InputButton = styled.button`
  cursor: pointer;
  background-color: #ee7057;
  height: 2rem;
  width: 10rem;
  border-radius: 10px;
  border: none;
  margin: 1rem auto;
  &:hover {
    background-color: #f7b048;
  }
`
export const ContainerInterno = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => props.alinhamento};
`;