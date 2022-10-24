import ComoFMAnuncieImg from '../../Images/Como_funciona_mei_anuncie.svg';

import './Como_funcionaM_anuncie.css'

function ComoFMAnuncie (){
    return(
        <div className="Como_funcionaM_anuncie">
            <div className="Como_funcionaM_anuncie_align">
                <p className="Como_funcionaM_anuncie_titulo">Anuncie o seu Produto ou Serviço</p>
                <ul>
                <li className="Como_funcionaM_anuncie_li"><p>Em seu perfil você irá encontrar a opção para criar um anúnico</p></li>
                <li className="Como_funcionaM_anuncie_li2"><p>Cadastre todas as informações necessária e adicione fotos do seu trabalho</p></li>
                <li className="Como_funcionaM_anuncie_li3"><p>Você pode anunciar quantos produtos e serviços quiser</p></li>
                </ul>
            </div>
            <img className="Como_funcionaM_anuncie_img" src={ComoFMAnuncieImg} />
        </div>
    )
}
export default ComoFMAnuncie