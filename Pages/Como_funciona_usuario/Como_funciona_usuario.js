import ComoFuncionaUheader from './Components/Como_funcionaU_header/Como_funcionaU_header';
import ComoFUtopo from './Components/Como_funcionaU_topo/Como_funcionaU_topo';
import ComoFUCadastro from './Components/Como_funcionaU_cadastro/Como_funcionaU_cadastro';
import ComoFuncionaUEscolha from './Components/Como_funcionaU_escolha/Como_funcionaU_escolha';
import ComoFULocal from './Components/Como_funcionaU_local/Como_funcionaU_local';
import ComoFUClassifique from './Components/Como_funcionaU_classifique/Como_funcionaU_classifique';
import Footer from '../Components/Footer/Footer';

import './Como_funciona_usuario.css';

function ComoFuncionaUsuario (){
    return(
        <div className="Como_funciona_usuario">
            <ComoFuncionaUheader />
            <ComoFUtopo />
            <ComoFUCadastro />
            <ComoFuncionaUEscolha />
            <ComoFULocal />
            <ComoFUClassifique />
            <Footer />
        </div>
    )
}
export default ComoFuncionaUsuario