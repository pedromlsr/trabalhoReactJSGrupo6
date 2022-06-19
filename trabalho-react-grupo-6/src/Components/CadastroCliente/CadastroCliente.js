import React, { useState } from "react";

import {api} from "../../Service/api";

import {
  Titulo,
  Container,
  ContainerInterno,
  Formulario,
  Input,
  InputButton,
} from "./style";

export const FormularioCliente = () => {
  
  const [email, setEmail] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const cliente = {email, nomeCompleto, cpf, telefone, dataNascimento, cep, numero, complemento}
    const postCliente = async (cliente) => {
      await api.post(`ecommerce/cliente`, cliente);
    }
    postCliente(cliente)
  };

  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
        <Titulo>NOVO CADASTRO</Titulo>
        <ContainerInterno>
        <Input
          type="text"
          required
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          placeholder="Nome completo*"
        />
          <Input
            type="text"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF*"
          />
            </ContainerInterno>
            <ContainerInterno>
          <Input
            type="text"
            required
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de Nascimento*"
          />
          <Input
            type="text"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone*"
          />
        </ContainerInterno>
        <ContainerInterno>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail*"
          />
          <Input type="email" placeholder="Confirme seu e-mail*" />
        </ContainerInterno>

        <Titulo>ENDEREÇO</Titulo>
        <Input
          type="text"
          required
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="CEP*"
        />
        <Input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número"
        />
        <Input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          placeholder="Complemento"
        />
        <ContainerInterno>
          <input type="checkbox" />
          Usar esse mesmo endereço para entregas
        </ContainerInterno>
        * Campos obrigatórios
        <ContainerInterno>
          <InputButton type="submit" value="Cadastrar"/>
          <InputButton type="reset" value="Limpar"/>
        </ContainerInterno>
      </Formulario>
    </Container>
  );
};