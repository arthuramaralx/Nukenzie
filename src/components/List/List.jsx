import Card from "../Card/Card";
import "./style.css"
import  NoCard from "../../assets/NoCard.svg"
export default function List({listTransactions, newArray, setListTransactions, filteredList, filteredListTransactions, setfilteredListTransactions}){


    return (
        <>
       
     
        {newArray.length > 0 ? 

        <>
        <div className="transactionLists">

        {newArray.map((transaction, index)=>
            <Card transaction={transaction} setListTransactions={setListTransactions} listTransactions={listTransactions} filteredListTransactions={filteredListTransactions}
            setfilteredListTransactions={setfilteredListTransactions} key={index}/>
        
        )}

        </div>
        </>
        :
        <>
        <div className="emptyTransactionLists">
            <h3>Você ainda não possui nem um lançamento</h3>
        <img src={NoCard} alt="" />
        </div>
        </>
        }
        
    </>
    )
}


