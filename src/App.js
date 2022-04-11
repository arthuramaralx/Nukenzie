import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import List from './components/List/List';
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TotalPrice from './components/TotalPrice/TotalPrice'

function App() {




const [listTransactions, setListTransactions] = useState( [ ] )
const appTotalPrice = listTransactions.reduce((x,y)=>{return x + Number(y.value)},0) 

  return (
    <div className="App">
      <div class="AppHeader">
    <Header/>
      </div>

    <div className='Body'>


     <Form className="Form" listTransactions={listTransactions} setListTransactions={setListTransactions}/>

     <List listTransactions={listTransactions}/>

    </div>
      <TotalPrice className="TotalPrice" listTransaction={listTransactions}  totalPrice={appTotalPrice}/>

    </div>
    
  );
}

export default App;
