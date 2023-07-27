import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from './login';
import {Register} from './Register';
import { BrowserRouter ,Routes,Route } from "react-router-dom";


function App() {
  /*const {currentForm,setCurrentForm} = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }*/
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' elements={<Login/>}></Route>
           <Route path='/' elements={<Register/>}></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;