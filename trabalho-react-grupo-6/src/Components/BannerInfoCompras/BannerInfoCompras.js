import React from "react"
import { Container, Icon, Text, Div, Sep } from "./style"
import FreteIcon from "../../Assets/Icons/delivery-truck.png"
import CartaoIcon from "../../Assets/Icons/credit-card.png"
import DescontoIcon from "../../Assets/Icons/discount.png"

export const BannerInfoCompras = () => {

   return (
      <>
         <Container bgColor="#686DB1">
            <Div>
               <Icon src={FreteIcon}/>
               <Text txtColor="#2B2E51">
                  Frete grátis a<br/>
                  partir de R$400,00
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={CartaoIcon}/>
               <Text txtColor="#2B2E51">
                  Parcele em até<br/>
                  6x sem juros
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={DescontoIcon}/>
               <Text txtColor="#2B2E51">
                  Desconto de 10%<br/>
                  no pix ou boleto
               </Text>         
            </Div>
         </Container>
      </>
   )
}