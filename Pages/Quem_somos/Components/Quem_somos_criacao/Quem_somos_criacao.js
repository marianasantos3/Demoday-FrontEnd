import CriacaoAna from '../../Images/Quem_criacao_ana.svg';
import CriacaoBruno from '../../Images/Quem_criacao_bruno.svg';
import CriacaoEdu from '../../Images/Quem_criacao_edu.svg';
import CriacaoGabriel from '../../Images/Quem_criacao_gabriel.svg';
import CriacaoMari from '../../Images/Quem_criacao_mari.svg';
import CriacaoPedro from '../../Images/Quem_criacao_pedro.svg';
import CriacaoRichard from '../../Images/Quem_criacao_richard.svg';
import QuemCriacaoImg from '../../Images/Quem_criacao_vm.svg';

import './Quem_somos_criacao.css';

function QueSomosCriacao (){
return(
    <div className="Quem_somos_criacao">
            <p className="Quem_somos_criacao_titulo">Quem criou a VisuMEI ?</p>
                <p className="Quem_somos_criacao_text">A VisuMEI foi criada por 7 estudantes de programação web Java do Instituto Proa: Ana Beatriz Laurenzano, Bruno Nogueira, Eduardo Costa, Gabriel de Jesus, Mariana dos Santos, Pedro Victor de Oliveira e Richard Chagas.</p>
            <div className="Quem_somos_criacao_integrantes1">
                <div className="Criacao_integrante">
                    <img src={CriacaoAna} />
                    <p>Ana Beatriz</p><p>Laurenzano</p>
                </div>
                <div className="Criacao_integrante">
                    <img src={CriacaoBruno} />
                    <p>Bruno</p><p>Nogueira</p>
                </div>
                <div className="Criacao_integrante">
                    <img src={CriacaoEdu} />
                    <p>Eduardo</p><p>Costa</p>
                </div>
                <div className="Criacao_integrante">
                    <img src={CriacaoGabriel} />
                    <p>Gabriel</p><p>de Jesus</p>
                </div>
            </div>
            <div className="Quem_somos_criacao_integrantes2">
                <div className="Criacao_integrante">
                    <img src={CriacaoMari} />
                    <p>Mariana</p><p>dos Santos</p>
                </div>
                <div className="Criacao_integrante">
                    <img src={CriacaoPedro} />
                    <p>Pedro</p><p>de Oliveira</p>
                </div>
                <div className="Criacao_integrante">
                    <img src={CriacaoRichard} />
                    <p>Richard</p><p>Chagas</p>
                </div>
            </div>
            <div className="Quem_criacao_img">
            <img src={QuemCriacaoImg} /></div>
        </div>
)
}
export default QueSomosCriacao