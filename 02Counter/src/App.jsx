import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter, setCounter] = useState(15)  
  const addvalue =()=>{
    if(Counter<30){
    // setCounter(Counter+1);
    // console.log("Clicked",Counter);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);


    }
  }

  const removeValue =()=>{
    if(Counter>0){
    setCounter(Counter-1);
    }

  }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {Counter}</h2>
    <button
    onClick={addvalue}
    >Increament Value</button>
    <br/>
    <button
    onClick={removeValue}
    >Decrement Value</button>
    </>
  )
}

export default App
