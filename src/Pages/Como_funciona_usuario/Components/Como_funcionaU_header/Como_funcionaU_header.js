import Logo from '../../../Images/Logotipo.svg';
import PerfilComoU from '../../../Images/Perfil_usuario.svg';


import './Como_funcionaU_header.css';

function ComoFuncionaUheader (){
    return(
        <div className="Como_funcionaU_header">
        <img className="Como_funcionaU_logo_header" src={Logo} />
        <nav className="Como_funcionaU_nav_header">
            <div className="Como_funcionaU_link"><a href="#">Serviços</a></div>
            <div className="Como_funcionaU_link"><a href="#">Produtos</a></div>
            <div className="Como_funcionaU_link_colorido"><a href="#">Como funciona</a></div>
            <div className="Como_funcionaU_link"><a href="#">Para MEI</a></div>
            <div className="Como_funcionaU_login"><a href="#">Login</a></div>
        </nav>
    </div>
    )
}
export default ComoFuncionaUheader