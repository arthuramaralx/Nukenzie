
import "./style.css"
import Trash  from "../../assets/Thrash.svg"
export default function Card({transaction, setListTransactions, listTransactions, filteredListTransactions, setfilteredListTransactions}){


function removeHandler(){
let removeCount = 1
if(removeCount === 1 ){
    console.log(filteredListTransactions)
    console.log(setListTransactions)
    setListTransactions(listTransactions.filter((item)=> item !== transaction))

        setfilteredListTransactions(filteredListTransactions.filter((item)=> item !== transaction))
    
    removeCount--
}

}

    return(
<>
<li className="productsCard">
    <div className="productsCard-left">

    <h3 className="Transaction-description">
        {transaction.description}
    </h3>
    <span className="Transaction-type">
        {transaction.type}
    </span>

    </div>

<div className="productsCard-right">

    <span className="Transaction-value">
        {transaction.value} R$
    </span>
        <span>
            <button onClick={removeHandler} >
            <img src={Trash} alt="" />
            </button>
        </span>
</div>

    </li>
</>
    )

}