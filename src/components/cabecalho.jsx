import './cabecalho.css'
import React from 'react';
import logoImage from '../img/logo.png'
import { Link } from "react-router-dom"
import {menu} from "../js/menu"

export default function Cabecalho(){
    const handleClick = () => {
        menu();
    };

    return(
    <>
    <div id="menu" className="menu">
        <ul className="itens">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/QmSomos'>Quem Somos</Link></li>
            <li><Link to='/Monitoramento'>Monitoramento de área</Link></li>
            <li><Link to='/Projectarduino'>Projeto</Link></li>
            <li><Link to='/Lixo'>Como o lixo é descartado</Link></li>  
            <li><Link to='/Contato'>Contato</Link></li>
            <li><Link to='/Login'>Login</Link></li> 
        </ul>        
        {/* Menu para smartphone/tablet */}
        <div className="menu-btn" onClick={handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
 </>

 )
}
