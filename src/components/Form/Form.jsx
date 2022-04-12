import { useState } from "react";
import "./style.css"
export default function Form({listTransactions, setListTransactions}){

    const [newTransaction, setNewTransaction] = useState( [] )
    const [description, setDescription] = useState("")
    const [value, setValue] = useState(0)
    const [entry, setEntry] = useState("Entrada")
    function handlerFormSubmit(event){

        event.preventDefault();
        setListTransactions([...listTransactions, {description: description, value: value, type: entry}])

    }

return (

<div className="Form">

<form className="form" action="" onSubmit={handlerFormSubmit}>


<p className="description-text">Descrição</p>
<input  className="description"  required type="text" placeholder="Digite aqui sua descrição" onChange={(event)=>setDescription(event.target.value)}/>
<span className="exemple">Ex: Compra de roupas</span>
<p className="description-text">Valor</p>
<input className="valueInput"  required type="number" placeholder="R$" onChange={(event)=>setValue(Number(event.target.value))} />
<p className="description-text-value">Tipo de valor</p>
<select className="entryInput" name="entradaSaida" id="" onChange={(event)=>setEntry(event.target.value)}>
<option value="Entrada">Entrada</option>
<option value="Saída">Saída</option>
</select>
<button className="formButton" type="submit" >Inserir Valor</button>
</form>
</div>





)




}