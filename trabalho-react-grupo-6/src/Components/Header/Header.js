import React from 'react';

import { Container, Titulo, LogoImg } from './style'

import Logo from "../../Assets/Img/logo-cor.png";


export const Header = () => {
    return (
        <Container>
            <LogoImg src = {Logo}/>
            <Titulo>Foldbreakers Store</Titulo>
        </Container>
    )
}