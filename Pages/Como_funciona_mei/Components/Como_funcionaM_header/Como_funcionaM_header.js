import Logo from '../../../Images/Logotipo.svg';


import './Como_funcionaM_header.css';

function ComoFMHeader (){
    return(
        <div className="Como_funcionaM_header">
        <img className="Como_funcionaM_logo_header" src={Logo} />
        <nav className="Como_funcionaM_nav_header">
            <div className="Como_funcionaM_link"><a href="#">Serviços</a></div>
            <div className="Como_funcionaM_link"><a href="#">Produtos</a></div>
            <div className="Como_funcionaM_link_colorido"><a href="#">Como funciona</a></div>
            <div className="Como_funcionaM_link"><a href="#">Para MEI</a></div>
            <div className="Como_funcionaM_login"><a href="#">Login</a></div>
        </nav>
    </div>
    )
}
export default ComoFMHeader