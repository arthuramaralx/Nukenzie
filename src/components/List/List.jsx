import Card from "../Card/Card";
import "./style.css"
export default function List({listTransactions}){


    return (
        <>
        <div className="transactionLists">

        {listTransactions.map((transaction, index)=>
            <Card transaction={transaction} key={index}/>
        
        )}

        </div>
        </>
    )

}
