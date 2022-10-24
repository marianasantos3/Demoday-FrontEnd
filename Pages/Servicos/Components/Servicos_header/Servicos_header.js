import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

import Logo from '../../../Images/Logomarca.svg';
import PerfilServicos from '../../../Images/Perfil_usuario.svg';
import ComoFuncionaUsuario from '../../../Como_funciona_usuario/Como_funciona_usuario';

import './Servicos_header.css'

function ServicosHeader (){
    return(
        
        <div className="Servicos_header">
            <img className="Servicos_logo_header" src={Logo} />
            <nav className="Servicos_nav_header">
                <div className="Servicos_link_colorido">Serviços</div>
                <div className="Servicos_link">Produtos</div>
                <div className="Servicos_link">Como funciona</div>
                <div className="Servicos_link"><a href="#">Para mei</a></div>
            </nav>
            <img className="Servicos_perfil_header" src={PerfilServicos} />
            
        </div>

        
        
    );
}

export default ServicosHeader