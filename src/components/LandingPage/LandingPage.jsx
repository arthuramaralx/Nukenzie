
import  LandingPage from "../../assets/LandingPage.svg"
import "./style.css"
export default function LandingPageComponent({isLoggedIn, setIsLoggedIn}){

    return (



        <div className="landingPageBody">
            
            <div className="landingPageBody-left">
                <h1><span>Nu</span> Kenzie</h1>
                <p className="first-text">Centralize o &nbsp;&nbsp; controle das suas finanças</p>
                <p className="second-text">de forma rápida e segura</p>
                <button onClick={()=>setIsLoggedIn(true)}>Iniciar</button>
            </div>
            <div className="landingPageBody-right">
                <img src={LandingPage} alt="" className="landingPage-svg"/>
            </div>
        </div>


    )
}