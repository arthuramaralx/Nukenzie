import Card from "../Card/Card";
import "./style.css"
import  NoCard from "../../assets/NoCard.svg"
export default function List({listTransactions, setListTransactions, filteredList, filteredListTransactions, setfilteredListTransactions}){

if(filteredList === false){

    return (
        <>
       
     
        {listTransactions.length > 0 ? 

        <>
        <div className="transactionLists">

        {listTransactions.map((transaction, index)=>
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

if(filteredList === true){
    return (
        <>
       
     
        {filteredListTransactions.length > 0 ? 

        <>
        <div className="transactionLists">

        {filteredListTransactions.map((transaction, index)=>
            <Card transaction={transaction} key={index}/>
        
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

}