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

  const handleNewGame = () => {
    setGameStatus('notStarted')
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
      {gameStatus === 'started' && (
        <button onClick={handleNewGame}>Starta om</button>
      )}
      {gameStatus === 'ended' && (
        <button onClick={handleNewGame}>Spela igen</button>
      )}
      <div className="game-container">
        <Board
          gameStatus={gameStatus}
          onGameStart={handleGameStart}
          onGameEnd={handleGameEnd}
        />
      </div>
    </div>
  )
}

export default App
