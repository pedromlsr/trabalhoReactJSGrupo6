import { api } from "./api";

const saveCategoria = async (categoria) => {
   try {
      await api.post('categoria', categoria)
      alert('Categoria cadastrada com sucesso!')
   } catch (error) {
      console.log(error)
      alert(
         error.response.data.message + ' ' + 
         error.response.data.details
      )
   }
}

const updateCategoria = async (categoria) => {
   try {
      await api.put('categoria', categoria)
      alert('Categoria atualizada com sucesso!')
   } catch (error) {
      console.log(error)
      alert(
         error.response.data.message + ' ' + 
         error.response.data.details
      )
   }
}

export const apiCategoria = {
   saveCategoria,
   updateCategoria
}