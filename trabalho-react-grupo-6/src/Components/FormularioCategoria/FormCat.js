import { Form, Input, InputButton, TextArea, Label } from "./style"

export const FormCat = (props) => {

   return (
      <Form onSubmit={props.submeterCat}>
         <Label>Nome da categoria:</Label>
         <Input
            type="text"
            required
            value={props.nomeCategoria}
            onChange={e => props.definirNomeCat(e.target.value)}
         />
         <Label>Descrição da categoria:</Label>
         <TextArea
            required
            value={props.descricaoCategoria}
            onChange={e => props.definirDescCat(e.target.value)}
         ></TextArea>
         <InputButton>{props.textoButton}</InputButton>
      </Form>
   )
}