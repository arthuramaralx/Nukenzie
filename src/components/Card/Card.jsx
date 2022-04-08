
import "./style.css"
export default function Card({transaction}){

    return(
<>
<li className='productsCard'>
    <h3 className="Transaction-description">
        {transaction.description}
    </h3>
    <span className="Transaction-type">
        {transaction.type}
    </span>
    <span className="Transaction-value">
        {transaction.value}
    </span>
    </li>
</>
    )

}