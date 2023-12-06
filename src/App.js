import React, {useState, useEffect} from 'react'
import "./App.css"
function App() {
    const [advice, setAdvice] = useState('');

    //https://api.adviceslip.com/advice

    const fetchData = async () => {
        const repose = await fetch('https://api.adviceslip.com/advice');
        const jsonData = await repose.json();
        setAdvice(jsonData.slip.advice);
        console.log(advice);
    }

    useEffect(() => {
      fetchData();
    }, [])
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='btn-triger' onClick={fetchData}>
            <span>GIVE ME ADIVCE</span>
        </button>
      </div>
    </div>
  )
}

export default App
