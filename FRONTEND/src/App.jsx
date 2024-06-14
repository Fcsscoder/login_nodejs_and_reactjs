import { useState } from 'react'
import './styles/main.scss'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [showDiv, setDiv] = useState(true)
  const [updateDiv, setUpdateDiv] = useState(false)

  const toggleDiv = (i) => {
    setDiv(!showDiv)
  }

  const toggleUpdateDiv = () => {
    setUpdateDiv(!updateDiv)
    setError('')
  }

  return (
    <>
      <div className="App">
        {showDiv ? (
          <div>
            <Login toggleDiv={toggleDiv} toggleUpdateDiv={toggleUpdateDiv} setDiv={setDiv}/>
          </div>
        ) : (
          <div>
            <Register toggleDiv={toggleDiv} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
