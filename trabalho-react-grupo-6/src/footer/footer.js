import React from 'react';
import icon from '../assets/1.png'
import icon2 from '../assets/2.png'
import icon3 from '../assets/3.png'
import { footer } from './styled';

const Footer = () => (
    <footer src={footer}>
        <div className='contato'>
        <img src={icon} alt=""/>
        <p> foldbreakers@gmail.com</p>
        </div>
        <div className='barra'></div>
        <div className='contato'>
        <img src={icon3} alt=""/>
        <p>(24) 99999-9999</p>
        </div>
        <div className='barra'></div>
        <div className='contato'>
        <img src={icon2} alt=""/>
        <p>Rua blablabla, 000 blablabla</p>
            </div>
    </footer>
);

export default Footer;