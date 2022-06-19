import { useState } from 'react'
import { Form } from './style';
import { apiCategoria } from '../../Service/api-categoria';
import { apiProduto } from '../../Service/api-produto';

export const CadastroCadProd = () => {
   const [request, setRequest] = useState('')

   const [nomeCategoria, setNomeCategoria] = useState('')
   const [descricaoCategoria, setDescricaoCategoria] = useState('')

   const [nomeProduto, setNomeProduto] = useState('')
   const [descricaoProduto, setDescricaoProduto] = useState('')
   const [qtdEstoque, setqtdEstoque] = useState('')
   const [valorUnitario, setValorUnitario] = useState('')
   const [idCategoria, setIdCategoria] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (request === 'saveCategoria') {
         const categoria = { nomeCategoria, descricaoCategoria }
         apiCategoria.saveCategoria(categoria)
      }
      
      if (request === 'saveProduto') {
         const produto = { nomeProduto, descricaoProduto, qtdEstoque, valorUnitario, idCategoria }
         apiProduto.saveProduto(produto)
      }
   }

   const  definirRequest = (request) => {
      setRequest(request)
   }

   const formCatOuProd = (request) => {
      if (request === 'saveCategoria') {
         return (
            <Form onSubmit={handleSubmit}>
               <label>Nome da categoria:</label>
               <input
                  type="text"
                  required
                  value={nomeCategoria}
                  onChange={e => setNomeCategoria(e.target.value)}
               />
               <label>Descrição da categoria:</label>
               <textarea
                  required
                  value={descricaoCategoria}
                  onChange={e => setDescricaoCategoria(e.target.value)}
               ></textarea>
               <button>Adicionar categoria</button>
            </Form>
         )
      }

      if (request === 'saveProduto') {
         return (
            <Form onSubmit={handleSubmit}>
            <label>Nome do produto:</label>
            <input
               type="text"
               required
               value={nomeProduto}
               onChange={e => setNomeProduto(e.target.value)}
            />
            <label>Descrição do produto:</label>
            <textarea
               required
               value={descricaoProduto}
               onChange={e => setDescricaoProduto(e.target.value)}
            ></textarea>
            <label>Quantidade em estoque do produto:</label>
            <input
               type="number"
               required
               value={qtdEstoque}
               onChange={e => setqtdEstoque(e.target.value)}
            />
            <label>Valor unitário do produto:</label>
            <input
               type="number"
               required
               value={valorUnitario}
               onChange={e => setValorUnitario(e.target.value)}
            />
            <label>Id da categoria do produto:</label>
            <input
               type="number"
               required
               value={idCategoria}
               onChange={e => setIdCategoria(e.target.value)}
            />
            <button>Adicionar produto</button>
         </Form>
         )
      }

      if (request === '') {
         return (
            <h4>Escolha o que deseja cadastrar clicando em um dos botões acima</h4>
         )
      }
   }

   return (
      <>
         <button onClick={() => definirRequest('findAllCategorias')}>Listar categorias</button>
         <button onClick={() => definirRequest('saveCategoria')}>Cadastrar nova categoria</button>
         <button onClick={() => definirRequest('saveProduto')}>Cadastrar produto</button>
         <div>
            {formCatOuProd(request)}
         </div>
      </>   
   )
}