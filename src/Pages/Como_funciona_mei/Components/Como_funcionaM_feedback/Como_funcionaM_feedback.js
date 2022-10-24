import ComoFMFeedbackImg from '../../Images/Como_funciona_mei_feedback.svg';

import './Como_funcionaM_feedback.css';

function ComoFMFeedback (){
    return(
        <div className="Como_funcionaM_feedback">
            <div className="Como_funcionaM_feedback_align">
                <p className="Como_funcionaM_feedback_titulo">Classifique os microempreendedores!</p>
                <ul>
                <li className="Como_funcionaM_feedback_li"><p>Depois que tiver sua primeira experiência com o trabalho de algum microempreendedor, o avalie e deixe seu comentário</p></li>
                <li className="Como_funcionaM_feedback_li"><p>Sua opinião é muito importante para a dinamicidade da VisuMei e ajudará o MEI a evoluir cada vez mais</p></li>
                </ul>
            </div>
            <img className="Como_funcionaM_feedback_img" src={ComoFMFeedbackImg} />
        </div>
    )
}
export default ComoFMFeedback