import { useState } from 'react'
import { apiCategoria } from '../../Service/api-categoria';
import { apiProduto } from '../../Service/api-produto';
import { FormCat } from '../../Components/FormularioCategoria/FormCat';
import { FormProd } from '../../Components/FormularioProduto/FormProd';
import { api } from '../../Service/api';
import { Container, Ul, H4, Div } from './style';
import { NavBar } from '../../Components/Navbar/navbar'

export const AreaInterna = () => {
   const [request, setRequest] = useState('')
   const [mostrar, setMostrar] = useState(false)
   
   const [cliente, setCliente] = useState({})
   const [clientes, setClientes] = useState([])
   const [idCliente, setIdCliente] = useState('')
   
   const [categoria, setCategoria] = useState({})
   const [categorias, setCategorias] = useState([])
   const [idCategoria, setIdCategoria] = useState('')
   const [nomeCategoria, setNomeCategoria] = useState('')
   const [descricaoCategoria, setDescricaoCategoria] = useState('')
   
   const [produto, setProduto] = useState({})
   const [produtos, setProdutos] = useState([])
   const [idProduto, setIdProduto] = useState('')
   const [nomeProduto, setNomeProduto] = useState('')
   const [descricaoProduto, setDescricaoProduto] = useState('')
   const [qtdEstoque, setQtdEstoque] = useState('')
   const [valorUnitario, setValorUnitario] = useState('')
   
   const [pedido, setPedido] = useState({})
   const [pedidos, setPedidos] = useState([])
   const [idPedido, setIdPedido] = useState('')

   const  handleRequest = (request) => {
      setMostrar(false)
      setRequest(request)

      if (request === 'findAllClientes') {
         const findAllClientes = async () => {
            try {
               const response = await api.get('cliente')
               setClientes(response.data)
            } catch (error) {
               console.log(error)
               alert(
                  error.response.data.message + ' ' + 
                  error.response.data.details
               )
            }
         }
         findAllClientes()
      }

      if (request === 'findAllCategorias') {
         const findAllCategorias = async () => {
            try {
               const response = await api.get('categoria')
               setCategorias(response.data)
            } catch (error) {
               console.log(error)
               alert(
                  error.response.data.message + ' ' + 
                  error.response.data.details
               )
            }
         }        
         findAllCategorias()
      }

      if (request === 'findAllProdutos') {
         const findAllProdutos = async () => {
            try {
               const response = await api.get('produto')
               setProdutos(response.data)
            } catch (error) {
               console.log(error)
               alert(
                  error.response.data.message + ' ' + 
                  error.response.data.details
               )
            }
         }
         findAllProdutos()
      }

      if (request === 'findAllPedidos') {
         const findAllPedidos = async () => {
            try {
               const response = await api.get('pedido')
               setPedidos(response.data)
            } catch (error) {
               console.log(error)
               alert(
                  error.response.data.message + ' ' + 
                  error.response.data.details
               )
            }
         }
         findAllPedidos()
      }
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (request === 'findClienteById') {
         try {
            const response = await api.get(`cliente/${idCliente}`)
            setCliente(response.data)
            setMostrar(true)
         } catch (error) {
            console.log(error)
            alert(
               error.response.data.message + ' ' + 
               error.response.data.details
            )
         }
      }
      
      if (request === 'findCategoriaById') {
         try {
            const response = await api.get(`categoria/${idCategoria}`)
            setCategoria(response.data)
            setMostrar(true)
         } catch (error) {
            console.log(error)
            alert(
               error.response.data.message + ' ' + 
               error.response.data.details
            )
         }
      }
      
      if (request === 'findProdutoById') {
         try {
            const response = await api.get(`produto/${idProduto}`)
            setProduto(response.data)
            setMostrar(true)
         } catch (error) {
            console.log(error)
            alert(
               error.response.data.message + ' ' + 
               error.response.data.details
            )
         }
      }

      if (request === 'findPedidoById') {
         try {
            const response = await api.get(`pedido/${idPedido}`)
            setPedido(response.data)
            setMostrar(true)
         } catch (error) {
            console.log(error)
            alert(
               error.response.data.message + ' ' + 
               error.response.data.details
            )
         }
      }

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

      if (request === 'findClienteById') {
         return (
            <>
               <Div>
                  <label>Id do cliente:</label>
                  <input
                     type="number"
                     required
                     value={idCliente}
                     onChange={e => setIdCliente(e.target.value)}
                  />
               </Div>
               <button onClick={handleSubmit}>Encontrar Cliente</button>
               {mostrar ?
                  <Ul>
                     <li>
                     {'Id: ' + cliente.idCliente +
                     ' / Nome: ' + cliente.nomeCompleto +
                     ' / E-mail: ' + cliente.email +
                     ' / Telefone: ' + cliente.telefone}
                     </li>
                  </Ul>
               : <H4>Digite o Id do cliente desejado</H4>
               }
            </>
         )
      }

      if (request === 'findAllCategorias') {
         return (
            <Ul>
               {categorias.sort((a, b) => (a.idCategoria - b.idCategoria)).map((res, key) => (
                  <li key={key}>
                     {'Id: ' + res.idCategoria +
                     ' / Nome: ' + res.nomeCategoria}
                  </li>
               ))}
            </Ul>
         )
      }

      if (request === 'findCategoriaById') {
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
               <button onClick={handleSubmit}>Encontrar Categoria</button>
               {mostrar ?
                  <Ul>
                     <li>
                        {'Id: ' + categoria.idCategoria +
                        ' / Nome: ' + categoria.nomeCategoria}
                     </li>
                  </Ul>
               : <H4>Digite o Id da categoria desejada</H4>
               }
            </>
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

      if (request === 'findProdutoById') {
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
               <button onClick={handleSubmit}>Encontrar Produto</button>
               {mostrar ?
                  <Ul>
                     <li>
                     {'Id: ' + produto.idProduto +
                     ' / Nome: ' + produto.nomeProduto +
                     ' / Descrição: ' + produto.descricaoProduto +
                     ' / Categoria: ' + produto.nomeCategoria +
                     ' / Qtd. Estoque: ' + produto.qtdEstoque +
                     ' / Preço: R$ ' + produto.valorUnitario.toFixed(2)}
                     </li>
                  </Ul>
               : <H4>Digite o Id do produto desejado</H4>
               }
            </>
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

      if (request === 'findPedidoById') {
         return (
            <>
               <Div>
                  <label>Id do pedido:</label>
                  <input
                     type="number"
                     required
                     value={idPedido}
                     onChange={e => setIdPedido(e.target.value)}
                  />
               </Div>
               <button onClick={handleSubmit}>Encontrar Pedido</button>
               {mostrar ?
                  <Ul>
                     <li>
                     {'Id: ' + pedido.idPedido +
                     ' / Cliente: ' + pedido.nomeCliente +
                     ' / Data: ' + pedido.dataPedido +
                     ' / Valor Líquido Total: R$ ' + pedido.valorLiqTotal.toFixed(2)}
                     </li>
                  </Ul>
               : <H4>Digite o Id do pedido desejado</H4>
               }
            </>
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
            <button onClick={() => handleRequest('findAllClientes')}>
               Listar clientes
            </button>
            <button onClick={() => handleRequest('findClienteById')}>
               Encontrar um cliente
            </button>
            <button onClick={() => handleRequest('findAllCategorias')}>
               Listar categorias
            </button>
            <button onClick={() => handleRequest('findCategoriaById')}>
               Encontrar uma categoria
            </button>
            <button onClick={() => handleRequest('findAllProdutos')}>
               Listar produtos
            </button>
            <button onClick={() => handleRequest('findProdutoById')}>
               Encontrar um produto
            </button>
            <button onClick={() => handleRequest('findAllPedidos')}>
               Listar pedidos
            </button>
            <button onClick={() => handleRequest('findPedidoById')}>
               Encontrar um pedido
            </button>
            <button onClick={() => handleRequest('saveCategoria')}>
               Cadastrar categoria
            </button>
            <button onClick={() => handleRequest('updateCategoria')}>
               Atualizar categoria
            </button>
            <button onClick={() => handleRequest('saveProduto')}>
               Cadastrar produto
            </button>
            <button onClick={() => handleRequest('updateProduto')}>
               Atualizar produto
            </button>
         </Container>
         {respostaRequest(request)}
      </>
   )
}