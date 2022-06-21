import { useState } from "react";
import LogoImg from "../../Assets/Img/logo-cor.png";
import { FormCat } from "../../Components/FormularioCategoria/FormCat";
import { FormProd } from "../../Components/FormularioProduto/FormProd";
import { NavBar } from "../../Components/Navbar/navbar";
import { api } from "../../Service/api";
import { apiCategoria } from "../../Service/api-categoria";
import { apiProduto } from "../../Service/api-produto";
import FormData from 'form-data'
import { Container, Ul, Li, H4, Div, ContainerExterno, ContainerInterno, Titulo, Complemento, Logo, Input, InputButton, Formulario, ContainerOrganizacao, Label, Text } from "./style";

export const AreaInterna = () => {
  const [request, setRequest] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const [cliente, setCliente] = useState({});
  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState("");

  const [categoria, setCategoria] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [idCategoria, setIdCategoria] = useState("");
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [descricaoCategoria, setDescricaoCategoria] = useState("");

  const [produto, setProduto] = useState({});
  const [produtos, setProdutos] = useState([]);
  const [idProduto, setIdProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");
  const [imagemProduto, setImagemProduto] = useState("");

  const [pedido, setPedido] = useState({});
  const [pedidos, setPedidos] = useState([]);
  const [idPedido, setIdPedido] = useState("");

  const handleRequest = (request) => {
    setMostrar(false);
    setRequest(request);

    if (request === "findAllClientes") {
      const findAllClientes = async () => {
        try {
          const response = await api.get("cliente");
          setClientes(response.data);
        } catch (error) {
          console.log(error);
          alert(
            error.response.data.message + " " + error.response.data.details
          );
        }
      };
      findAllClientes();
    }

    if (request === "findAllCategorias") {
      const findAllCategorias = async () => {
        try {
          const response = await api.get("categoria");
          setCategorias(response.data);
        } catch (error) {
          console.log(error);
          alert(
            error.response.data.message + " " + error.response.data.details
          );
        }
      };
      findAllCategorias();
    }

    if (request === "findAllProdutos") {
      const findAllProdutos = async () => {
        try {
          const response = await api.get("produto");
          setProdutos(response.data);
        } catch (error) {
          console.log(error);
          alert(
            error.response.data.message + " " + error.response.data.details
          );
        }
      };
      findAllProdutos();
    }

    if (request === "findAllPedidos") {
      const findAllPedidos = async () => {
        try {
          const response = await api.get("pedido");
          setPedidos(response.data);
        } catch (error) {
          console.log(error);
          alert(
            error.response.data.message + " " + error.response.data.details
          );
        }
      };
      findAllPedidos();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (request === "findClienteById") {
      try {
        const response = await api.get(`cliente/${idCliente}`);
        setCliente(response.data);
        setMostrar(true);
      } catch (error) {
        console.log(error);
        alert(error.response.data.message + " " + error.response.data.details);
      }
    }

    if (request === "findCategoriaById") {
      try {
        const response = await api.get(`categoria/${idCategoria}`);
        setCategoria(response.data);
        setMostrar(true);
      } catch (error) {
        console.log(error);
        alert(error.response.data.message + " " + error.response.data.details);
      }
    }

    if (request === "findProdutoById") {
      try {
        const response = await api.get(`produto/${idProduto}`);
        setProduto(response.data);
        setMostrar(true);
      } catch (error) {
        console.log(error);
        alert(error.response.data.message + " " + error.response.data.details);
      }
    }

    if (request === "findPedidoById") {
      try {
        const response = await api.get(`pedido/${idPedido}`);
        setPedido(response.data);
        setMostrar(true);
      } catch (error) {
        console.log(error);
        alert(error.response.data.message + " " + error.response.data.details);
      }
    }

    if (request === "saveCategoria") {
      const categoria = {
        nomeCategoria,
        descricaoCategoria,
      };
      apiCategoria.saveCategoria(categoria);
    }

    if (request === "updateCategoria") {
      const categoriaUpdate = {
        idCategoria,
        nomeCategoria,
        descricaoCategoria,
      };
      apiCategoria.updateCategoria(categoriaUpdate);
    }

    if (request === "saveProduto") {
      const produto = {
        nomeProduto,
        descricaoProduto,
        qtdEstoque,
        valorUnitario,
        idCategoria,
      };
      // apiProduto.saveProduto(produto);
      const formData = new FormData()
      formData.append('produto', produto)
      formData.append('file', imagemProduto)
      try {
         await api.post('produto/com-foto', formData, {
            headers: {
               'accept': 'application/json',
               'Content-Type': 'multipart/format-data'
            }
         })
         alert('Produto cadastrado com sucesso!')
      } catch (error) {
         console.log(error);
         alert(error.response.data.message + ' ' + error.response.data.details)
      }
    }

    if (request === "updateProduto") {
      const produtoUpdate = {
        idProduto,
        nomeProduto,
        descricaoProduto,
        qtdEstoque,
        valorUnitario,
        idCategoria,
      };
      apiProduto.updateProduto(produtoUpdate);
    }
  };

   const handleImageSelect = (e) => {
      console.log(e.target.files[0]);
      setImagemProduto(e.target.files[0])
  }

  const respostaRequest = (request) => {
    if (request === "findAllClientes") {
      return (
        <Ul>
          {clientes
            .sort((a, b) => a.idCliente - b.idCliente)
            .map((res, key) => (
              <Li key={key}>
                <Text>Id: </Text> {res.idCliente}
                <Text>Nome: </Text> {res.nomeCompleto}
                <Text>Email: </Text> {res.email}
                <Text>Telefone: </Text> {res.telefone}
              </Li>
            ))}
        </Ul>
      );
    }

    if (request === "findClienteById") {
      return (
        <Formulario>
          <Div>
            <Label>Id do cliente:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idCliente}
              onChange={(e) => setIdCliente(e.target.value)}
            />
          </Div>
          <InputButton onClick={handleSubmit}>Encontrar Cliente</InputButton>
          {mostrar ? (
            <Ul>
              <Li>
              <Text>Id: </Text>  {cliente.idCliente} 
              </Li>
              <Li>
                <Text>Nome: </Text> {cliente.nomeCompleto}
              </Li>
              <Li>
                <Text>E-mail: </Text> {cliente.email}
              </Li>
              <Li>
                <Text>Telefone: </Text> {cliente.telefone}
              </Li>
            </Ul>
          ) : (
            <H4>Digite o Id do cliente desejado</H4>
          )}
        </Formulario>
      );
    }

    if (request === "findAllCategorias") {
      return (
        <Ul>
          {categorias
            .sort((a, b) => a.idCategoria - b.idCategoria)
            .map((res, key) => (
              <Li key={key}>
                <Text>Id: </Text> {res.idCategoria}
                <Text>Nome: </Text> {res.nomeCategoria}
              </Li>
            ))}
        </Ul>
      );
    }

    if (request === "findCategoriaById") {
      return (
        <Formulario>
          <Div>
            <Label>Id da categoria:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idCategoria}
              onChange={(e) => setIdCategoria(e.target.value)}
            />
          </Div>
          <InputButton onClick={handleSubmit}>Encontrar Categoria</InputButton>
          {mostrar ? (
            <Ul>
              <Li>
                <Text>Id: </Text>  {categoria.idCategoria}
              </Li>
              <Li>
                <Text>Nome: </Text>  {categoria.nomeCategoria}
              </Li>
              <Li>
                <Text>Descrição: </Text>  
              </Li>
              <Li>
                {categoria.descricaoCategoria}
              </Li>
            </Ul>
          ) : (
            <H4>Digite o Id da categoria desejada</H4>
          )}
        </Formulario>
      );
    }

    if (request === "findAllProdutos") {
      return (
        <Ul>
          {produtos
            .sort((a, b) => a.idProduto - b.idProduto)
            .map((res, key) => (
              <Li key={key}>
                <Text>Id: </Text> {res.idProduto}
                <Text>Nome: </Text> {res.nomeProduto}
                <Text>Descrição: </Text> {res.descricaoProduto}
                <Text>Categoria: </Text> {res.nomeCategoria}
                <Text>Qtd. em Estoque: </Text> {res.qtdEstoque}
                <Text>Preço: R$</Text> {res.valorUnitario.toFixed(2)}
              </Li>
            ))}
        </Ul>
      );
    }

    if (request === "findProdutoById") {
      return (
        <Formulario>
          <Div>
            <Label>Id do produto:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idProduto}
              onChange={(e) => setIdProduto(e.target.value)}
            />
          </Div>
          <InputButton onClick={handleSubmit}>Encontrar Produto</InputButton>
          {mostrar ? (
            <Ul>
              <Li>
                <Text>Id: </Text>  {produto.idProduto}
              </Li>
              <Li>
                <Text>Nome: </Text>  {produto.nomeProduto}
              </Li>
              <Li>
                <Text>Descrição: </Text>  
              </Li>
              <Li>
                {produto.descricaoProduto}
              </Li>
              <Li>
                <Text>Categoria: </Text>  {produto.nomeCategoria}
              </Li>
              <Li>
                <Text>Qtd. em Estoque: </Text>  {produto.qtdEstoque}
              </Li>
              <Li>
                <Text>Preço: R$ </Text>  {produto.valorUnitario.toFixed(2)}
              </Li>
            </Ul>
          ) : (
            <H4>Digite o Id do produto desejado</H4>
          )}
        </Formulario>
      );
    }

    if (request === "findAllPedidos") {
      return (
        <Ul>
          {pedidos
            .sort((a, b) => a.idPedido - b.idPedido)
            .map((res, key) => (
              <Li key={key}>
                <Text>Id: </Text> {res.idPedido}
                <Text>Cliente: </Text> {res.nomeCliente}
                <Text>Data do Pedido: </Text> {res.dataPedido}
                <Text>Valor Líquido Total: R$</Text> {res.valorLiqTotal.toFixed(2) + " | "}
              </Li>
            ))}
        </Ul>
      );
    }

    if (request === "findPedidoById") {
      return (
        <Formulario>
          <Div>
            <Label>Id do pedido:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idPedido}
              onChange={(e) => setIdPedido(e.target.value)}
            />
          </Div>
          <InputButton onClick={handleSubmit}>Encontrar Pedido</InputButton>
          {mostrar ? (
            <Ul>
              <li>
                {"Id: " +
                  pedido.idPedido +
                  " | Cliente: " +
                  pedido.nomeCliente +
                  " | Data: " +
                  pedido.dataPedido +
                  " | Valor Líquido Total: R$ " +
                  pedido.valorLiqTotal.toFixed(2)}
              </li>
            </Ul>
          ) : (
            <H4>Digite o Id do pedido desejado</H4>
          )}
        </Formulario>
      );
    }

    if (request === "saveCategoria") {
      return (
        <FormCat
          submeterCat={handleSubmit}
          nomeCategoria={nomeCategoria}
          descricaoCategoria={descricaoCategoria}
          definirNomeCat={setNomeCategoria}
          definirDescCat={setDescricaoCategoria}
          textoButton="Adicionar Categoria"
        />
      );
    }

    if (request === "updateCategoria") {
      return (
        <>
          <Div>
            <Label>Id da categoria:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idCategoria}
              onChange={(e) => setIdCategoria(e.target.value)}
            />
          </Div>
          <FormCat
            submeterCat={handleSubmit}
            nomeCategoria={nomeCategoria}
            descricaoCategoria={descricaoCategoria}
            definirNomeCat={setNomeCategoria}
            definirDescCat={setDescricaoCategoria}
            textoButton="Atualizar Categoria"
          />
        </>
      );
    }

    if (request === "saveProduto") {
      return (
        <FormProd
          submeterProd={handleSubmit}
          nomeProduto={nomeProduto}
          descricaoProduto={descricaoProduto}
          qtdEstoque={qtdEstoque}
          valorUnitario={valorUnitario}
          idCategoria={idCategoria}
          imagemProd={imagemProduto}
          definirNomeProd={setNomeProduto}
          definirDescProd={setDescricaoProduto}
          definirQtdEst={setQtdEstoque}
          definirValorUni={setValorUnitario}
          definirIdCat={setIdCategoria}
          definirImgProd={handleImageSelect}
          textoButton="Adicionar Produto"
        />
      );
    }

    if (request === "updateProduto") {
      return (
        <>
          <Div>
            <Label>Id do produto:</Label>
            <Input
              width="5rem"
              type="number"
              required
              value={idProduto}
              onChange={(e) => setIdProduto(e.target.value)}
            />
          </Div>
          <FormProd
            submeterProd={handleSubmit}
            nomeProduto={nomeProduto}
            descricaoProduto={descricaoProduto}
            qtdEstoque={qtdEstoque}
            valorUnitario={valorUnitario}
            idCategoria={idCategoria}
            definirNomeProd={setNomeProduto}
            definirDescProd={setDescricaoProduto}
            definirQtdEst={setQtdEstoque}
            definirValorUni={setValorUnitario}
            definirIdCat={setIdCategoria}
            textoButton="Atualizar Produto"
          />
        </>
      );
    }

    if (request === "") {
      return <H4>Escolha a ação desejada clicando nos botões acima</H4>;
    }
  };

  return (
    <>
      <ContainerExterno>
        <ContainerInterno>
          <NavBar />
          <Complemento />
        </ContainerInterno>
      </ContainerExterno>
      <Titulo>
        Foldbreakers Store <Logo src={LogoImg} /> Área Interna
      </Titulo>
      <Container>
        <ContainerOrganizacao>
        <InputButton onClick={() => handleRequest("findAllClientes")}>
          Listar clientes
        </InputButton>
        <InputButton onClick={() => handleRequest("findClienteById")}>
          Encontrar um cliente
        </InputButton>
        </ContainerOrganizacao>
        <ContainerOrganizacao>
        <InputButton onClick={() => handleRequest("findAllCategorias")}>
          Listar categorias
        </InputButton>
        <InputButton onClick={() => handleRequest("findCategoriaById")}>
          Encontrar uma categoria
        </InputButton>
        <InputButton onClick={() => handleRequest("saveCategoria")}>
          Cadastrar categoria
        </InputButton>
        <InputButton onClick={() => handleRequest("updateCategoria")}>
          Atualizar categoria
        </InputButton>
        </ContainerOrganizacao>
        <ContainerOrganizacao>
        <InputButton onClick={() => handleRequest("findAllProdutos")}>
          Listar produtos
        </InputButton>
        <InputButton onClick={() => handleRequest("findProdutoById")}>
          Encontrar um produto
        </InputButton>
        <InputButton onClick={() => handleRequest("saveProduto")}>
          Cadastrar produto
        </InputButton>
        <InputButton onClick={() => handleRequest("updateProduto")}>
          Atualizar produto
        </InputButton>
        </ContainerOrganizacao>
        <ContainerOrganizacao>
        <InputButton onClick={() => handleRequest("findAllPedidos")}>
          Listar pedidos
        </InputButton>
        <InputButton onClick={() => handleRequest("findPedidoById")}>
          Encontrar um pedido
        </InputButton>
        </ContainerOrganizacao>
      </Container>
      {respostaRequest(request)}
    </>
  );
};
