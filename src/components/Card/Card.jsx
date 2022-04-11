
import "./style.css"
export default function Card({transaction}){

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

</div>

    </li>
</>
    )

}