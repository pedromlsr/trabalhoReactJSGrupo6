import { useState } from 'react'
import { Form } from './style';
import { api } from '../../Service/api'

export const CadastroCadProd = () => {
   const [catOuProd, setCatOuProd] = useState('')

   const [nomeCategoria, setNomeCategoria] = useState('')
   const [descricaoCategoria, setDescricaoCategoria] = useState('')

   const [nomeProduto, setNomeProduto] = useState('')
   const [descricaoProduto, setDescricaoProduto] = useState('')
   const [qtdEstoque, setqtdEstoque] = useState()
   const [valorUnitario, setValorUnitario] = useState()
   const [idCategoria, setIdCategoria] = useState()

   const handleSubmit = e => {
      e.preventDefault()

      if (catOuProd === 'categoria') {
         const categoria = { nomeCategoria, descricaoCategoria }
         const postCategoria = async (categoria) => {
            await api.post('ecommerce/categoria', categoria)
         }
         postCategoria(categoria)
      }
      
      if (catOuProd === 'produto') {
         const produto = { nomeProduto, descricaoProduto, qtdEstoque, valorUnitario, idCategoria }
         const postProduto = async (produto) => {
            await api.post('ecommerce/produto', produto)
         }
         postProduto(produto)
      }
   }

   const  definirForm = (defForm) => {
      setCatOuProd(defForm)
   }

   const formCatOuProd = (catOuProd) => {
      if (catOuProd === 'categoria') {
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

      if (catOuProd === 'produto') {
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

      if (catOuProd === '') {
         return (
            <h4>Escolha o que deseja cadastrar clicando em um dos botões acima</h4>
         )
      }
   }

   return (
      <>
         <button onClick={() => definirForm('categoria')}>Cadastrar categoria</button>
         <button onClick={() => definirForm('produto')}>Cadastrar produto</button>
         <div>
            {formCatOuProd(catOuProd)}
         </div>
      </>   
   )
}