import LupaPesquisa from '../../Images/Servicos_lupa_pesquisa.svg'

import './Servicos_barraBusca.css'

function ServicosBarra (){
    return(
        <div className="Servicos_Barra">
            <div className="Servicos_Barra_align">
                <input className="Servicos_barra_pesquisar" type="text" placeholder="Pesquisar por um produto" />
                <img className="Servicos_lupa_img" src={LupaPesquisa} />
            </div>
        </div>
    )
}

export default ServicosBarra