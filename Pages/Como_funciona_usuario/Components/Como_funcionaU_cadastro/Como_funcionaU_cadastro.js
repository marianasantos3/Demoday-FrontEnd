import ComoFUCadastroImg from '../../Images/Como_funciona_usuario_cadastro.svg';

import './Como_funcionaU_cadastro.css';

function ComoFUCadastro (){
    return(
        <div className="Como_funcionaU_cadastro">
        <img src={ComoFUCadastroImg} />
        <div className="Como_funcionaU_cadastro_align">
            <p className="Como_funcionaU_cadastro_titulo">Faça seu cadastro em nosso site</p>
            <p className="Como_funcionaU_cadastro_text">Cadastre-se com o seu email e crie uma senha para ter seu perfil personalizado aqui na VisuMEI </p>
            <button className="Como_funcionaU_cadastro_button">Cadastre-se agora</button>
        </div>

    </div>
    )
}
export default ComoFUCadastro