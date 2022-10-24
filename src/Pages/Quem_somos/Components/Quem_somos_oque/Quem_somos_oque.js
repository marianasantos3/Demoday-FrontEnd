import QuemSomosOqueImg from '../../Images/Quem_somos_oque.svg';

import './Quem_somos_oque.css';

function QuemSomosOque (){
    return(
        <div className="Quem_somos_oque">
            <p className="Quem_somos_oque_titulo">O que é a VisuMEI ?</p>
            <div className="Quem_somos_oque_align">
                <p className="Quem_somos_oque_text">A VisuMEI surgiu para o projeto “Demoday” do Instituto Proa. A plataforma foi desenvolvida com o intuito de ajudar microempreendedores, principalmente da periferia, a aumentarem suas vendas com a divulgação do seu trabalho. Faz parte do nosso objetivo, também, estimulá-los a se tornarem pessoas jurídicas para estarem dentro da legalidade do país, além de obterem diversos benefícios com isso.</p>
               <img className="Quem_somos_oque_img" src={QuemSomosOqueImg} />
            </div>
        </div>
    )
}
export default QuemSomosOque