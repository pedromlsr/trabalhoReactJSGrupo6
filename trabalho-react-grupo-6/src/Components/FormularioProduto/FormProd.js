import { Form } from "./style"

export const FormProd = (props) => {

   return (
      <Form onSubmit={props.submeterProd}>
         <label>Nome do produto:</label>
         <input
            type="text"
            required
            value={props.nomeProduto}
            onChange={e => props.definirNomeProd(e.target.value)}
         />
         <label>Descrição do produto:</label>
         <textarea
            required
            value={props.descricaoProduto}
            onChange={e => props.definirDescProd(e.target.value)}
         ></textarea>
         <label>Quantidade em estoque do produto:</label>
         <input
            type="number"
            required
            value={props.qtdEstoque}
            onChange={e => props.definirQtdEst(e.target.value)}
         />
         <label>Valor unitário do produto:</label>
         <input
            type="number"
            required
            value={props.valorUnitario}
            onChange={e => props.definirValorUni(e.target.value)}
         />
         <label>Id da categoria do produto:</label>
         <input
            type="number"
            required
            value={props.idCategoria}
            onChange={e => props.definirIdCat(e.target.value)}
         />
         <button>{props.textoButton}</button>
      </Form>
   )
}