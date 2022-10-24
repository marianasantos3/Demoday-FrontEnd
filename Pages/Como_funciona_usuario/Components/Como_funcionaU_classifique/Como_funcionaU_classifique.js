import ComoFuncionaUClassifiqueImg from '../../Images/Como_funciona_usuario_classifique.svg';

import './Como_funcionaU_classifique.css';

function ComoFUClassifique (){
    return(
        <div className="Como_funcionaU_classifique">
            <div className="Como_funcionaU_classifique_align">
                <p className="Como_funcionaU_classifique_titulo">Classifique os microempreendedores!</p>
                <ul>
                <li className="Como_funcionaU_classifique_li"><p>Depois que tiver sua primeira experiência com o trabalho de algum microempreendedor, o avalie e deixe seu comentário</p></li>
                <li className="Como_funcionaU_classifique_li"><p>Sua opinião é muito importante para a dinamicidade da VisuMei e ajudará o MEI a evoluir cada vez mais</p></li>
                </ul>
            </div>
            <img className="Como_funcionaU_classifique_img" src={ComoFuncionaUClassifiqueImg} />
        </div>
    )
}
export default ComoFUClassifique