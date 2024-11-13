import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function App() {
  
  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)

  const[interest,setInterest] =useState(0)

  const calculate=(e)=>{
    const output = (amount*year*rate/100)
    console.log(output);
    setInterest(output)
    
  }

  const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)

  }

  return (
    <>
      <div className='App'>
        <div className='container'>
          <div className='header'>
            <h1>Simple-Interest-Calculator</h1>
            <p>calculate your Simple Interest with us</p>
          </div>
          <div className='total'>
            <h2>&#8377; {interest}</h2>
            <p>Your Total Interest</p>
          </div>
          <div className='form'>
            <form className='input'>

              <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} />
              <TextField id="filled-basic" label="Year" variant="filled" value={year || ""}  onChange={(e)=>setYear(e.target.value)}/>
              <TextField id="standard-basic" label="Rate of interest" value={rate || ""}  variant="standard" onChange={(e)=>setRate(e.target.value)} />

            </form>
          </div>
          <div className='button'>

            <Button variant="text " onClick={e=> resizeTo(e) }>Reset</Button>
            <Button variant="contained" onClick={e=> calculate()}>Calculate</Button>
          </div>
        </div>

      </div>


    </>
  )
}

export default App