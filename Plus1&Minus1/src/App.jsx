import { useState } from 'react';
import './App.css'
import Heading from './components/Heading.jsx'


const App = () => {

  const [num, setNum] = useState(0);
  const Increase = ()=>{
      setNum(num+1)
  }
  const Decrease = ()=>{
      setNum(num-1)
  }
  const Reset = ()=>{
    setNum(0)
  }

  return (
    <div className='text-[100px] content-center '>
      <Heading />
      <h1 className='bg-gray-700 m'>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease} >Decrease</button>
      <button onClick={Reset} id='reset'>Reset</button>
    </div>
  )
}

export default App
