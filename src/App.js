import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import List from './components/List/List';
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
function App() {




const [listTransactions, setListTransactions] = useState( [ ] )

  return (
    <div className="App">
      <div class="AppHeader">
    <Header/>
      </div>
     <Form className="Form"listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      <List listTransactions={listTransactions}/>
    </div>
    
  );
}

export default App;
