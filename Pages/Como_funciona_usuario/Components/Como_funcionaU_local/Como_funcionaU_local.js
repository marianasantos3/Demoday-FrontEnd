import ComoFULocalImg from '../../Images/Como_funciona_usuario_local.gif';

import './Como_funcionaU_local.css';

function ComoFULocal(){
    return(
        <div className="Como_funcionaU_local">
        <img className="Como_funcionaU_local_gif"src={ComoFULocalImg} />
        <div className="Como_funcionaU_local_align">
            <p className="Como_funcionaU_local_titulo">Os mais próximos da sua região</p>
            <p className="Como_funcionaU_local_text">Utilizaremos a sua localização atual e real para exibir em primeiro lugar, nos serviços e produtos, os microempreendedores mais próximos de você, o que facilitará suas buscas </p>
        </div>
    </div>
    )
}
export default ComoFULocal