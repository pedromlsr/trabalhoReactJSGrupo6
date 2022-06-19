import { api } from "./api";

const saveProduto = async (produto) => {
   try {
      await api.post('produto', produto)
      alert('Produto cadastrado com sucesso!')
   } catch (error) {
      console.log(error)
      alert(
         error.response.data.message + ' ' + 
         error.response.data.details
      )
   }
}

export const apiProduto = {
   saveProduto
}