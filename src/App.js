import './App.css'
import Board from './components/board/Board'
import { useState } from 'react'

const App = () => {
  const [gameStatus, setGameStatus] = useState('notStarted')

  const handleGameStart = () => {
    setGameStatus('started')
  }

  const handleGameEnd = () => {
    setGameStatus('ended')
  }

  return (
    <div className="App">
      <h1>Kids Memory</h1>
      <h2>
        {gameStatus === 'notStarted' &&
          'Starta spelet genom att klicka på ett av korten'}
        {gameStatus === 'started' && 'Spelet är igång'}
        {gameStatus === 'ended' && 'Grattis, du vann!'}
      </h2>
      <div className="game-container">
        <Board onGameStart={handleGameStart} onGameEnd={handleGameEnd} />
      </div>
    </div>
  )
}

export default App
