import ServicosMei1 from '../../Images/Servicos_mei_1.svg';
import ServicosEstrela from '../../Images/Servicos_mei_estrela.svg';
import ServicosLocal from '../../Images/Servicos_mei_local.svg';
import ServicosTrabalhoImg1 from '../../Images/Servicos_mei_1_trabalho.svg';
import ServicosTrabalhoImg2 from '../../Images/Servicos_mei_1_trabalho2.svg';
import ServicosTrabalhoImg3 from '../../Images/Servicos_mei_1_trabalho3.svg';
import ServicosMeiInsta from '../../Images/Servicos_mei_instagram.svg';
import ServicosMeiFace from '../../Images/Servicos_mei_facebook.svg';
import ServicosMei2 from '../../Images/Servicos_mei_2.svg';
import ServicosTrabalhoMei2Img1 from '../../Images/Servicos_mei_2_trabalho.svg';
import ServicosTrabalhoMei2Img2 from '../../Images/Servicos_mei_2_trabalho2.svg';
import ServicosTrabalhoMei2Img3 from '../../Images/Servicos_mei_2_trabalho3.svg';

import './Servicos_mei.css';

function ServicosMei (){
    return(
        <div className="Servicos_mei">
            <div className="Servicos_mei_align">
                <div className="Servicos_mei_informacoes_esquerda">
                    <img className="Servicos_mei_img_perfil" src={ServicosMei1} />
                    <div className="Servicos_mei_estrelas">
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <p>5</p>
                    </div>
                    <p className="Servicos_mei_nome">Winderson Melo</p>
                    <p className="Servicos_mei_nome_negocio">Winderson designs</p>
                    <div className="Servicos_mei_local">
                        <img src={ServicosLocal} />
                        <p className="Servicos_mei_cidade">São Paulo,</p><p className="Servicos_mei_bairro">Jardim Tex</p>
                    </div>
                    <button className="Servicos_mei_botao">Ver mais</button>
                </div>
                <div className="Servicos_mei_informacoes_direita">
                    <p className="Servicos_mei_titulo">Serviços disponíneis</p>
                    <div className="Servicos_mei_trabalho_img">
                        <img src={ServicosTrabalhoImg1} />
                        <img className="Servicos_servico2_img" src={ServicosTrabalhoImg2} />
                    </div>
                    <div className="Servicos_mei_informacoes">
                        <div className="Sevicos_mei_servico1">
                            <p className="Servicos_mei_preco">a partir de R$300,00</p>
                            <p className="Servicos_mei_nome_servico">Layout de site</p>
                        </div>
                        <div className="Servicos_mei_servico2">
                            <p className="Servicos_mei_preco">a partir de R$12,00</p>
                            <p className="Servicos_mei_nome_servico">Vetores em 3D</p>
                        </div>
                    </div>
                    <div className="Servicos_mei_tags">
                        <p>Tags: </p>
                        <ul type="circle">
                            <li>Design</li>
                            <li>Ux</li>
                            <li>Ui</li>
                        </ul>
                    </div>
                    <div className="Servicos_mei_sociais">
                        <img src={ServicosMeiInsta} />
                        <p>@winderson_melo21</p>
                        <img src={ServicosMeiFace} />
                        <p>Winderson Melo</p>

                    </div>

                </div>

            </div>
            <div className="Servicos_mei_align2">
                <div className="Servicos_mei_informacoes_esquerda">
                    <img className="Servicos_mei_img_perfil" src={ServicosMei2} />
                    <div className="Servicos_mei_estrelas">
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <img src={ServicosEstrela} />
                        <p>4</p>
                    </div>
                    <p className="Servicos_mei_nome">Leticia Fagundes</p>
                    <p className="Servicos_mei_nome_negocio">Leticia Nails</p>
                    <div className="Servicos_mei_local">
                        <img src={ServicosLocal} />
                        <p className="Servicos_mei_cidade">São Paulo,</p><p className="Servicos_mei_bairro">Jardim Flor</p>
                    </div>
                    <button className="Servicos_mei_botao">Ver mais</button>
                </div>
                <div className="Servicos_mei_informacoes_direita">
                <p className="Servicos_mei_titulo">Serviços disponíneis</p>
                    <div className="Servicos_mei_trabalho_img">
                        <img src={ServicosTrabalhoMei2Img1} />
                        <img className="Servicos_servico2_img" src={ServicosTrabalhoMei2Img2} />
                        <img className="Servicos_servico2_img" src={ServicosTrabalhoMei2Img3} />
                    </div>
                    <div className="Servicos_mei_informacoes">
                        <div className="Sevicos_mei_servico1">
                            <p className="Servicos_mei_preco">a partir de R$60,00</p>
                            <p className="Servicos_mei_nome_servico">Nail art</p>
                        </div>
                    </div>
                    <div className="Servicos_mei_tags">
                        <p>Tags: </p>
                        <ul type="circle">
                            <li>Manicure</li>
                            <li>Unhas</li>
                            <li>Nail art</li>
                        </ul>
                    </div>
                    <div className="Servicos_mei_sociais">
                        <img src={ServicosMeiInsta} />
                        <p>@fagundes_nails</p>


                    </div>

                </div>

            </div>
        </div>
    )

}

export default ServicosMei