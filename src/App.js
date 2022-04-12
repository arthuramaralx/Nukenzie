import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import List from './components/List/List';
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TotalPrice from './components/TotalPrice/TotalPrice'
import Filters from './components/Filters/Filters';
import LandingPageComponent from './components/LandingPage/LandingPage';

function App() {



const [filteredList, setFilteredList] = useState(false)
const [filteredListTransactions, setfilteredListTransactions] = useState({})
const [listTransactions, setListTransactions] = useState( [ ] )
const [isLoggedIn, setIsLoggedIn] = useState(false)
const appTotalPrice = listTransactions.reduce((x,y)=>{
if(y.type === "Entrada"){
  return x + y.value
}
if(y.type === "Saída"){
  return x - y.value
}

},0) 


  return (
    <>
    {isLoggedIn? 
    <div className="App">
      <div className="AppHeader">
    <Header  setIsLoggedIn={setIsLoggedIn}/>
      </div>

    <div className='Body'>


     <Form className="Form" listTransactions={listTransactions} setListTransactions={setListTransactions}/>
<div>
    <Filters listTransactions={listTransactions} setListTransactions={setListTransactions} filteredListTransactions={filteredListTransactions}
    setfilteredListTransactions={setfilteredListTransactions} setFilteredList={setFilteredList} />

     <List listTransactions={listTransactions} setListTransactions={setListTransactions} filteredList={filteredList} filteredListTransactions={filteredListTransactions}
      setfilteredListTransactions={setfilteredListTransactions}/>
</div>

    </div>
      <TotalPrice className="TotalPrice" listTransaction={listTransactions}  totalPrice={appTotalPrice}/>

    </div>
    :
    <div >
      <LandingPageComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
}

      </>


);
    
}


export default App;
