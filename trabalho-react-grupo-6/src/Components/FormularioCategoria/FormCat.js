import { Form, Input, InputButton, TextArea } from "./style"

export const FormCat = (props) => {

   return (
      <Form onSubmit={props.submeterCat}>
         <label>Nome da categoria:</label>
         <Input
            type="text"
            required
            value={props.nomeCategoria}
            onChange={e => props.definirNomeCat(e.target.value)}
         />
         <label>Descrição da categoria:</label>
         <TextArea
            required
            value={props.descricaoCategoria}
            onChange={e => props.definirDescCat(e.target.value)}
         ></TextArea>
         <InputButton>{props.textoButton}</InputButton>
      </Form>
   )
}