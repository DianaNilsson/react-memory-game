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
          'Starta spelet genom att klicka på ett av korten.'}
        {gameStatus === 'started' &&
          'Spelet är igång. Klicka på ett kort för att kika under.'}
        {gameStatus === 'ended' && 'Grattis, du vann!'}
      </h2>
      <div className="button-container">
        {gameStatus === 'started' && (
          <button className="new-game-button" onClick={handleNewGame}>
            Starta om
          </button>
        )}
        {gameStatus === 'ended' && (
          <button className="new-game-button" onClick={handleNewGame}>
            Spela igen
          </button>
        )}
      </div>
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
