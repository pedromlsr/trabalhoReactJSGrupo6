import React from "react"
import { Container, Icon, Text, Div, Sep } from "./style"
import MailIcon from "../../Assets/Icons/mailIcon.png"
import WhatsappIcon from "../../Assets/Icons/whatsappIcon.png"
import LocationIcon from "../../Assets/Icons/locationIcon.png"

export const Footer = () => {

   return (
      <>
         <Container bgColor="#686DB1">
            <Div>
               <Icon src={MailIcon}/>
               <Text txtColor="#2B2E51">
                  foldbreakers@gmail.com
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={WhatsappIcon}/>
               <Text txtColor="#2B2E51">
                  (24) 99999-9999
               </Text>
            </Div>
            <Sep bgColor="#2B2E51"/>
            <Div>
               <Icon src={LocationIcon}/>
               <Text txtColor="#2B2E51">
                  Rua João da Silva, 123, Quitandinha<br/>
                  55555-555, Petrópolis, RJ, Brasil
               </Text>         
            </Div>
         </Container>
      </>
   )
}