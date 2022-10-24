import ServicosHeader from "./Components/Servicos_header/Servicos_header";
import ServicosBarra from "./Components/Servicos_barraBusca/Servicos_barraBusca";
import ServicosFiltro from "./Components/Servicos_filtro/Servicos_filtro";
import ServicosMei from "./Components/Servicos_mei/Servicos_mei";
import Footer from "../Components/Footer/Footer";

import './Servicos.css';

function Servicos (){
    return(
        <div className="Servicos">
            <ServicosHeader />
            <ServicosBarra />
            <ServicosFiltro />
            <ServicosMei />
            <Footer />
            
        </div>
    )
}
export default Servicos
