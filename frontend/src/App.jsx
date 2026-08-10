import { useState } from 'react'
import './App.css'
import SquareButton from './components/SquareButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <SquareButton children="Qual é o segredo?" />
  {/* TODO: eliminar este teste */}

    </>
  )
}

export default App
