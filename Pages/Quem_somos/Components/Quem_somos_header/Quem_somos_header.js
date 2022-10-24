import Logo from '../../Images/Quem_somos_logo_header.svg';

import './Quem_somos_header.css';

function QuemSomosHeader (){
    return(
        <div className="Quem_somos_header">
            <img className="Quem_somos_logo_header" src={Logo} />
            <nav className="Quem_somos_nav_header">
                <div className="Quem_somos_link"><a href="#">Serviços</a></div>
                <div className="Quem_somos_link"><a href="#">Produtos</a></div>
                <div className="Quem_somos_link_2"><a href="#">Como funciona</a></div>
                <div className="Quem_somos_link"><a href="#">Para MEI</a></div>
                <div className="Quem_somos_login"><a href="#">Login</a></div>
            </nav>
        </div>
    )
}
export default QuemSomosHeader