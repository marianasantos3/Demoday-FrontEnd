import ComoFMCadastroImg from '../../Images/Como_funciona_mei_cadastro.svg';

import './Como_funcionaM_cadastro.css';

function ComoFMCadastro (){
    return(
        <div className="Como_funcionaM_cadastro">
        <img src={ComoFMCadastroImg} />
        <div className="Como_funcionaM_cadastro_align">
            <p className="Como_funcionaM_cadastro_titulo">Faça seu cadastro em nosso site</p>
            <p className="Como_funcionaM_cadastro_text">Cadastre-se com o seu email, crie uma senha e coloque as suas informações e as do seu negócio para ter seu perfil personalizado aqui na VisuMEI  </p>
            <button className="Como_funcionaM_cadastro_button">Cadastre-se agora</button>
        </div>

    </div>
    )
}
export default ComoFMCadastro