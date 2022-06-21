import { Form, Input, InputButton, TextArea, ContainerInterno } from "./style"

export const FormProd = (props) => {

   return (
      <Form onSubmit={props.submeterProd}>
         <label>Nome do produto:</label>
         <Input
            type="text"
            required
            value={props.nomeProduto}
            onChange={e => props.definirNomeProd(e.target.value)}
         />
         <label>Descrição do produto:</label>
         <TextArea
            required
            value={props.descricaoProduto}
            onChange={e => props.definirDescProd(e.target.value)}
         ></TextArea>
         <label>Quantidade em estoque do produto:</label>
         <Input
            type="number"
            required
            value={props.qtdEstoque}
            onChange={e => props.definirQtdEst(e.target.value)}
            />
         <label>Valor unitário do produto:</label>
         <Input
            type="number"
            required
            value={props.valorUnitario}
            onChange={e => props.definirValorUni(e.target.value)}
            />
         <label>Id da categoria do produto:</label>
         <Input
            type="number"
            required
            value={props.idCategoria}
            onChange={e => props.definirIdCat(e.target.value)}
         />
         <InputButton>{props.textoButton}</InputButton>
      </Form>
   )
}