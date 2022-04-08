import { useState } from "react";
import "./style.css"
export default function Form({listTransactions, setListTransactions}){

    const [newTransaction, setNewTransaction] = useState( [] )
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [entry, setEntry] = useState("entrada")
return (

<div className="Form">

<form className="form" action="" onSubmit={(event)=>{event.preventDefault()}}>


<p className="description-text">Descrição</p>
<input  className="description" type="text" placeholder="Digite aqui sua descrição" onChange={(event)=>setDescription(event.target.value)}/>
<span className="exemple">Ex: Compra de roupas</span>
<p className="description-text">Valor</p>
<input className="valueInput" type="text" placeholder="R$" onChange={(event)=>setValue(event.target.value)} />
<p className="description-text-value">Tipo de valor</p>
<select className="entryInput" name="entradaSaida" id="" onChange={(event)=>setEntry(event.target.value)}>
<option value="entrada">Entrada</option>
<option value="saída">Saída</option>
</select>
<button className="formButton" type="submit" onClick={()=>setListTransactions([...listTransactions, {description: description, value: value, type: entry}])}>Inserir Valor</button>
{console.log(listTransactions)}
</form>
</div>





)




}