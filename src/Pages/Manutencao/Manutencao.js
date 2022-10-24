import QuemSomosHeader from '../Quem_somos/Components/Quem_somos_header/Quem_somos_header'
import ManutencaoImg from '../Manutencao/Images/Manutencao.svg'

import './Manutencao.css'

function Manutencao (){
    return(
        <div className="Manutencao">
            <QuemSomosHeader />
            <div className="Manutencao_align">
                <img src={ManutencaoImg} />
                <p>Essa página está em manutenção para melhoras na plataforma !</p>
            </div>
           
        </div>

    )
}

export default Manutencao