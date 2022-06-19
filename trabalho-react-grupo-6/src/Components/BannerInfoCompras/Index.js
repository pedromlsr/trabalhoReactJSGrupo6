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
                  <p>Frete grátis a</p>
                  <p>partir de R$400,00</p>
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={CartaoIcon}/>
               <Text txtColor="#2B2E51">
                  <p>Parcele em até</p>
                  <p>6x sem juros</p>
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={DescontoIcon}/>
               <Text txtColor="#2B2E51">
                  <p>Desconto de 10%</p>
                  <p>no pix ou boleto</p>
               </Text>         
            </Div>
         </Container>
      </>
   )
}