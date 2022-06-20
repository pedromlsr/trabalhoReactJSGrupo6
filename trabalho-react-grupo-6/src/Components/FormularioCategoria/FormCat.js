import { Form } from "./style"

export const FormCat = (props) => {

   return (
      <Form onSubmit={props.submeterCat}>
         <label>Nome da categoria:</label>
         <input
            type="text"
            required
            value={props.nomeCategoria}
            onChange={e => props.definirNomeCat(e.target.value)}
         />
         <label>Descrição da categoria:</label>
         <textarea
            required
            value={props.descricaoCategoria}
            onChange={e => props.definirDescCat(e.target.value)}
         ></textarea>
         <button>{props.textoButton}</button>
      </Form>
   )
}