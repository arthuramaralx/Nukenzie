
import "./style.css"
import Trash from "../../assets/Thrash.svg"
export default function Card({ transaction, setListTransactions, listTransactions, filteredListTransactions, setfilteredListTransactions }) {


    function removeHandler(props) {

        console.log(filteredListTransactions)
        console.log(setListTransactions)
        setListTransactions(listTransactions.filter((item) => item.id !== props))

    }
    const colorChanger = transaction.type === "Entrada" ? "cardEntry" : "cardExit";


    return (
        <>
            <li className={`productsCard ${colorChanger}`}>
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
                        {Number(transaction.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <span>
                        <button onClick={() => removeHandler(transaction.id)} >
                            <img src={Trash} alt="" />
                        </button>
                    </span>
                </div>

            </li>
        </>
    )

}