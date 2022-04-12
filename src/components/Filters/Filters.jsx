
import "./style.css"
    export default function Filters({listTransactions, filter, setFilter, setListTransactions, filteredListTransactions, setfilteredListTransactions, setFilteredList }){


    function filterHandler(event){
        if(event.target.value === 'todos'){
            setFilteredList(false)
        }
        if(event.target.value === 'entrada'){
            setfilteredListTransactions(listTransactions.filter((item)=> item.type === "Entrada"))
            setFilteredList(true)
        }
        if(event.target.value === 'despesas'){
            setfilteredListTransactions(listTransactions.filter((item)=> item.type === "Saída"))
            setFilteredList(true)
        }
      }

    return (
        <div>
            <div className="filters-Box">
                <h3 className="resumo">Resumo financeiro</h3>
                <button value="todos" onClick={()=>setFilter('Todos')}>Todos</button>
                <button value="entrada" onClick={()=>setFilter('Entrada')}>Entrada</button>
                <button value="despesas" onClick={()=>setFilter('Saída')}>Despesa</button>
            </div>


        </div>
    )
}