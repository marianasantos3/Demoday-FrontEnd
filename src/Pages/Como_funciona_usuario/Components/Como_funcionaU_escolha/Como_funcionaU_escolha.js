import ComoFuncionaUEscolhaImg from '../../Images/Como_funciona_usuario_escolha.svg';

import './Como_funcionaU_escolha.css';

function ComoFuncionaUEscolha (){
    return(
        <div className="Como_funcionaU_escolha">
            <div className="Como_funcionaU_escolha_align">
                <p className="Como_funcionaU_escolha_titulo">Escolha a aba Serviços ou Produtos</p>
                <ul>
                <li className="Como_funcionaU_escolha_li"><p>Utilize os filtros quando quiser especificar sua busca</p></li>
                <li className="Como_funcionaU_escolha_li2"><p>Na barra de pesquisa você pode procurar pelo que quer de forma mais precisa</p></li>
                <li className="Como_funcionaU_escolha_li3"><p>Quando achar o que procura, é só entrar em contato com o MEI através da forma disponibilizada por ele</p></li>
                </ul>
            </div>
            <img className="Como_funcionaU_escolha_img" src={ComoFuncionaUEscolhaImg} />
        </div>
    )
}
export default ComoFuncionaUEscolha