import { useState } from 'react'
import './App.css'
import ListStates from './components/ListStates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-sm-12 text-center">
          <h1>State Abbreviator</h1>
        </div>
      </div>
      <div id="dropdown-btn" className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <ListStates />
        </ul>
      </div>
      <div id="StateAbbr" className='row justify-content-center'>
        <div id="Abbr" className="col-sm-6 text-center"></div>
      </div>
    </div>
  )
}

export default App
