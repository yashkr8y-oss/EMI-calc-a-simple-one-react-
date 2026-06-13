import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[amount, setAmount] = useState("");
const[rate, setRate] = useState("");
const[time, setTime] = useState("");īīīī
function EMI(){
 const a = Number(amount);
 const b = Number(rate)/ 12/ 100;
 const c = Number(time)*12;
 const calculateEmi = (a * b * Math.pow(1+b, c)) / (Math.pow(1+b, c) - 1);
 return calculateEmi.toFixed(2);

  }

  return (
    <><h1>hello this is a EMi calc</h1>
    <p>INput the AMount</p>
    <input type="number" step="0.01" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
    <p>Inpu the rate of interest</p>
    <input step="0.01" type="number" placeholder='Rate' value={rate} onChange={(e) => setRate(e.target.value)} />
    <input type="number" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)}/>
    
    <h3>EMI : {EMI()}</h3>

    
    </>

     
  )
}



export default App
