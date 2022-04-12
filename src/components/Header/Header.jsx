import "./style.css"
export default function Header({setIsLoggedIn}){
    return(
        <div className="Header">


<h1><span>Nu</span> Kenzie</h1>
<button className="Header-button" onClick={()=>setIsLoggedIn(false)}>Sair</button>
<br className="listra"/>

        </div>

    )
}