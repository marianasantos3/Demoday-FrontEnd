import FooterFace from '../../Components/Footer/Images/footer_face.svg';
import FooterInsta from '../../Components/Footer/Images/footer_insta.svg';
import FooterLinke from '../../Components/Footer/Images/footer_linke.svg';
import './Footer.css';

function Footer (){
    return(
        <div className="Footer">
            <div className="Footer_sociais">
                <img src={FooterFace} />
                <img src={FooterInsta} />
                <img src={FooterLinke} />
            </div>
            <div className="Footer_informacoes">
                <p>VisuMEI © 2022</p>
                <p>|</p>
                <p>Política de privacidade</p>
                <p>|</p>
                <p>Quem somos</p>
            </div>
        </div>
    )
}
export default Footer


