import QuemSomosHeader from './Components/Quem_somos_header/Quem_somos_header';
import QuemSomosOque from './Components/Quem_somos_oque/Quem_somos_oque';
import QueSomosCriacao from './Components/Quem_somos_criacao/Quem_somos_criacao';
import Footer from '../Components/Footer/Footer';

import './Quem_somos.css';

function QuemSomos (){
    return(
        <div className="Quem_somos">
            <QuemSomosHeader />
            <QuemSomosOque />
            <QueSomosCriacao />
            <Footer />
        </div>
    )
}
export default QuemSomos