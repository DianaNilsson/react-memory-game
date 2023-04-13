import './App.css'
import Board from './components/board/Board'

const App = () => {
  return (
    <div className="App">
      <h1>Kids Memory</h1>
      <h2>Starta spelet genom att klicka på ett av korten</h2>
      <Board />
    </div>
  )
}

export default App
