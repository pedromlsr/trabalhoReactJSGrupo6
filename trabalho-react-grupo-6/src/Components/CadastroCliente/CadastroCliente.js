import React from "react";

import api from "../../Service/api";

import {
  Titulo,
  Container,
  ContainerInterno,
  Formulario,
  Input,
  InputNome
} from "./style";

export const FormularioCliente = () => {
  return (
    <Container>
      <Formulario>
        <Titulo>NOVO CADASTRO</Titulo>
        <InputNome type="text" placeholder="Nome completo*" />
        <ContainerInterno>
        <Input type="text" placeholder="CPF*" />
        <Input type="text" placeholder="Data de Nascimento*" />
        </ContainerInterno>
        <ContainerInterno>
        <Input type="text" placeholder="Telefone*" />
        <Input type="text" placeholder="Celular" />
        </ContainerInterno>
        <ContainerInterno>
        <Input type="email" placeholder="E-mail*" />
        <Input type="email" placeholder="Confirme seu e-mail*" />
        </ContainerInterno>
        <ContainerInterno>
        <Input type="password" placeholder="Senha*" />
        <Input type="password" placeholder="Confirme sua Senha*" />
        </ContainerInterno>
        <ContainerInterno>
          <input type="checkbox" />
          Desejo receber a newsletter!
        </ContainerInterno>

        <Titulo>ENDEREÇO</Titulo>
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Número" />
        <Input type="text" placeholder="Complemento" />
        <ContainerInterno>
          <input type="checkbox" />
          Usar esse mesmo endereço para entregas
        </ContainerInterno>
      </Formulario>
    </Container>
  );
};
