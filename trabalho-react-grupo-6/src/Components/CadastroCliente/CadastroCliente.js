import React, { useState } from "react";

import { api } from "../../Service/api";

import {
  Titulo,
  Container,
  ContainerInterno,
  Formulario,
  Input,
  InputButton,
} from "./style";

export const FormularioCliente = () => {
  const [email, setEmail] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cliente = {
      email,
      nomeCompleto,
      cpf,
      telefone,
      dataNascimento,
      cep,
      numero,
      complemento,
    };
    const postCliente = async (cliente) => {
      await api.post("cliente", cliente);
    };
    postCliente(cliente);

    setNomeCompleto("");
    setCpf("");
    setDataNascimento("");
    setTelefone("");
    setEmail("");
    setCep("");
    setNumero("");
  };

  return (
    <Container>
      <Formulario onSubmit={handleSubmit} method="post">
        <Titulo>NOVO CLIENTE</Titulo>
        <Input
          largura="41.2rem"
          type="text"
          required
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="Nome completo*"
        />
        <ContainerInterno>
          <Input
            type="text"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF*"
          />
          <Input
            type="text"
            required
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de Nascimento*"
          />
        </ContainerInterno>
        <ContainerInterno>
          <Input
            type="text"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone*"
          />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail*"
          />
        </ContainerInterno>
        <Titulo>ENDEREÇO</Titulo>
        <ContainerInterno>
          <Input
            largura="12.9rem"
            type="text"
            required
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="CEP*"
          />
          <Input
            largura="12.9rem"
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Número"
          />
          <Input
            largura="12.9rem"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            placeholder="Complemento"
          />
        </ContainerInterno>
        * Campos obrigatórios
        <ContainerInterno alinhamento="center">
          <InputButton type="submit" value="Cadastrar" />
        </ContainerInterno>
      </Formulario>
    </Container>
  );
};
