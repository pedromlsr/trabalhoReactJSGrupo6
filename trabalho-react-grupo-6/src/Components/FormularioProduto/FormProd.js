import { Form, Input, InputButton, TextArea, Label } from "./style"

export const FormProd = (props) => {

   return (
      <Form onSubmit={props.submeterProd}>
         <Label>Nome do produto:</Label>
         <Input
            type="text"
            required
            value={props.nomeProduto}
            onChange={e => props.definirNomeProd(e.target.value)}
         />
         <Label>Descrição do produto:</Label>
         <TextArea
            required
            value={props.descricaoProduto}
            onChange={e => props.definirDescProd(e.target.value)}
         ></TextArea>
         <Label>Quantidade em estoque do produto:</Label>
         <Input
            type="number"
            required
            value={props.qtdEstoque}
            onChange={e => props.definirQtdEst(e.target.value)}
            />
         <Label>Valor unitário do produto:</Label>
         <Input
            type="number"
            required
            value={props.valorUnitario}
            onChange={e => props.definirValorUni(e.target.value)}
            />
         <Label>Id da categoria do produto:</Label>
         <Input
            type="number"
            required
            value={props.idCategoria}
            onChange={e => props.definirIdCat(e.target.value)}
         />
         <Label>Imagem do produto:</Label>
         <input
            type="file"
            // required
            value={props.imagemProduto}
            onChange={e => props.definirImgProd(e)}
         />
         <InputButton>{props.textoButton}</InputButton>
      </Form>
   )
}