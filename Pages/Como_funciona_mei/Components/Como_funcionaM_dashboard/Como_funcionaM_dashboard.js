import ComoFMDashboardImg from '../../Images/Como_funciona_mei_dashboard.svg'
;
import './Como_funcionaM_dashboard.css';

function ComoFMDashboard (){
    return(
        <div className="Como_funcionaM_dashboard">
        <img className="Como_funcionaM_dashboard_img"src={ComoFMDashboardImg} />
        <div className="Como_funcionaM_dashboard_align">
            <p className="Como_funcionaM_dashboard_titulo">Seu Dashboard</p>
            <p className="Como_funcionaM_dashboard_text">Em seu perfil, você terá acesso ao seu dashboard, onde ficarão informações sobre a sua trajetória aqui na VisuMEI, como o número de visualizações dos seus anúncios na semana e mês atuais  </p>
        </div>
    </div>
    )
}
export default ComoFMDashboard