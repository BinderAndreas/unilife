import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'

function App() {
const [email,setEmail]=useState('')


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <div>
       <Header />
    </div>
  );
}

export default App;
