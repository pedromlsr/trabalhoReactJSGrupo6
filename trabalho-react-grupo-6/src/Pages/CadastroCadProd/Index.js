import { useState, useEffect } from 'react'
import { apiCategoria } from '../../Service/api-categoria';
import { apiProduto } from '../../Service/api-produto';
import { FormCat } from '../../Components/FormularioCategoria/FormCat';
import { FormProd } from '../../Components/FormularioProduto/FormProd';
import { api } from '../../Service/api';
import { Container, Ul, H4, Div } from './style';
import { NavBar } from '../../Components/Navbar/navbar'

export const CadastroCadProd = () => {
   const [request, setRequest] = useState('')

   const [clientes, setClientes] = useState([])
   const [categorias, setCategorias] = useState([])
   const [produtos, setProdutos] = useState([])
   const [pedidos, setPedidos] = useState([])

   const [idCategoria, setIdCategoria] = useState('')
   const [nomeCategoria, setNomeCategoria] = useState('')
   const [descricaoCategoria, setDescricaoCategoria] = useState('')

   const [idProduto, setIdProduto] = useState('')
   const [nomeProduto, setNomeProduto] = useState('')
   const [descricaoProduto, setDescricaoProduto] = useState('')
   const [qtdEstoque, setQtdEstoque] = useState('')
   const [valorUnitario, setValorUnitario] = useState('')

   useEffect(() => {
      const findAllCategorias = async () => {
        const response = await api.get('categoria')
        setCategorias(response.data)
      }
      findAllCategorias()
    }, [])

    useEffect(() => {
      const findAllClientes = async () => {
        const response = await api.get('cliente')
        setClientes(response.data)
      }
      findAllClientes()
    }, [])
    
    useEffect(() => {
      const findAllProdutos = async () => {
        const response = await api.get('produto')
        setProdutos(response.data)
      }
      findAllProdutos()
    }, [])

    useEffect(() => {
      const findAllPedidos = async () => {
        const response = await api.get('pedido')
        setPedidos(response.data)
      }
      findAllPedidos()
    }, [])

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (request === 'saveCategoria') {
         const categoria = {
            nomeCategoria, descricaoCategoria
         }
         apiCategoria.saveCategoria(categoria)
      }
      
      if (request === 'updateCategoria') {
         const categoriaUpdate = {
            idCategoria, nomeCategoria, descricaoCategoria
         }
         apiCategoria.updateCategoria(categoriaUpdate)
      }
      
      if (request === 'saveProduto') {
         const produto = {
            nomeProduto, descricaoProduto, qtdEstoque, valorUnitario, idCategoria
         }
         apiProduto.saveProduto(produto)
      }

      if (request === 'updateProduto') {
         const produtoUpdate = {
            idProduto, nomeProduto, descricaoProduto, qtdEstoque, valorUnitario, idCategoria
         }
         apiProduto.updateProduto(produtoUpdate)
      }
   }

   const  definirRequest = (request) => {
      setRequest(request)
   }

   const respostaRequest = (request) => {
      if (request === 'findAllClientes') {
         return (
            <Ul>
               {clientes.sort((a, b) => (a.idCliente - b.idCliente)).map((res, key) => (
                  <li key={key}>
                     {'Id: ' + res.idCliente +
                     ' / Nome: ' + res.nomeCompleto +
                     ' / E-mail: ' + res.email +
                     ' / Telefone: ' + res.telefone}
                  </li>
               ))}
            </Ul>
         )
      }
    
      if (request === 'findAllCategorias') {
         return (
            <Ul>
               {categorias.sort((a, b) => (a.idCategoria - b.idCategoria)).map((res, key) => (
                  <li key={key}>
                     {'Id: ' + res.idCategoria + ' / Nome: ' + res.nomeCategoria}
                  </li>
               ))}
            </Ul>
         )
      }

      if (request === 'findAllProdutos') {
         return (
            <Ul>
               {produtos.sort((a, b) => (a.idProduto - b.idProduto)).map((res, key) => (
                  <li key={key}>
                     {'Id: ' + res.idProduto +
                     ' / Nome: ' + res.nomeProduto +
                     ' / Descrição: ' + res.descricaoProduto +
                     ' / Categoria: ' + res.nomeCategoria +
                     ' / Qtd. Estoque: ' + res.qtdEstoque +
                     ' / Preço: R$ ' + res.valorUnitario.toFixed(2)}
                  </li>
               ))}
            </Ul>
         )
      }

      if (request === 'findAllPedidos') {
         return (
            <Ul>
               {pedidos.sort((a, b) => (a.idPedido - b.idPedido)).map((res, key) => (
                  <li key={key}>
                     {'Id: ' + res.idPedido +
                     ' / Cliente: ' + res.nomeCliente +
                     ' / Data: ' + res.dataPedido +
                     ' / Valor Líquido Total: R$ ' + res.valorLiqTotal.toFixed(2)}
                  </li>
               ))}
            </Ul>
         )
      }

      if (request === 'saveCategoria') {
         return (
            <FormCat
               submeterCat={handleSubmit}
               nomeCategoria={nomeCategoria}
               descricaoCategoria={descricaoCategoria}
               definirNomeCat={setNomeCategoria}
               definirDescCat={setDescricaoCategoria}
               textoButton='Adicionar Categoria'
            />
         )
      }

      if (request === 'updateCategoria') {
         return (
            <>
               <Div>
                  <label>Id da categoria:</label>
                  <input
                     type="number"
                     required
                     value={idCategoria}
                     onChange={e => setIdCategoria(e.target.value)}
                  />
               </Div>
               <FormCat
                  submeterCat={handleSubmit}
                  nomeCategoria={nomeCategoria}
                  descricaoCategoria={descricaoCategoria}
                  definirNomeCat={setNomeCategoria}
                  definirDescCat={setDescricaoCategoria}
                  textoButton='Atualizar Categoria'
               />
            </>
         )
      }

      if (request === 'saveProduto') {
         return (
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
               textoButton='Adicionar Produto'
            />
         )
      }

      if (request === 'updateProduto') {
         return (
            <>
               <Div>
                  <label>Id do produto:</label>
                  <input
                     type="number"
                     required
                     value={idProduto}
                     onChange={e => setIdProduto(e.target.value)}
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
               textoButton='Atualizar Produto'
            />
            </>
         )
      }

      if (request === '') {
         return (
            <H4>Escolha a ação desejada clicando nos botões acima</H4>
         )
      }
   }

   return (
      <>
         <NavBar/>
         <Container>
            <button onClick={() => definirRequest('findAllClientes')}>Listar clientes</button>
            <button onClick={() => definirRequest('findAllCategorias')}>Listar categorias</button>
            <button onClick={() => definirRequest('findAllProdutos')}>Listar produtos</button>
            <button onClick={() => definirRequest('findAllPedidos')}>Listar pedidos</button>
            <button onClick={() => definirRequest('saveCategoria')}>Cadastrar categoria</button>
            <button onClick={() => definirRequest('updateCategoria')}>Atualizar categoria</button>
            <button onClick={() => definirRequest('saveProduto')}>Cadastrar produto</button>
            <button onClick={() => definirRequest('updateProduto')}>Atualizar produto</button>
         </Container>
         {respostaRequest(request)}
      </>
   )
}