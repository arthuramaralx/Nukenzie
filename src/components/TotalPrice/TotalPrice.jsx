import "./style.css"
import { useState } from "react"
export default function TotalPrice({totalPrice}){


    return(
        <div className="totalValue-box">
     
            <div className="totalValue-left">
                <h3>Valor total:</h3>
                <p>O valor se refere ao saldo</p>
            </div>
            <div className="totalValue-right">
                <span>{Number(totalPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
        </div>
    )
}