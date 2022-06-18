import { useState } from 'react'
import { Form } from './style';
import { api } from '../../Service/api'

export const CadastroCadProd = () => {
   const [nomeCategoria, setNomeCategoria] = useState('')
   const [descricaoCategoria, setDescricaoCategoria] = useState('')
   // const [categoria, setCategoria] = useState({
   //    nome:"",
   //    descricao:""
   // })


   const handleSubmit = e => {
      e.preventDefault()
      // setCategoria({
      //    nome: nomeCategoria,
      //    descricao: descricaoCategoria
      // })
      const categoria = { nomeCategoria, descricaoCategoria }
      const postCategoria = async (categoria) => {
         await api.post('ecommerce/categoria', categoria)
      }
      postCategoria(categoria)
   }

   return (
      <>
         <h1>Cadastre uma categoria:</h1>
         <Form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
               type="text"
               required
               value={nomeCategoria}
               onChange={e => setNomeCategoria(e.target.value)}
            />
            <label>Descrição:</label>
            <textarea
               required
               value={descricaoCategoria}
               onChange={e => setDescricaoCategoria(e.target.value)}
            ></textarea>
            <button>Adicionar</button>
            {/* onClick={handleClick} */}
         </Form>
      </>   
   )
}