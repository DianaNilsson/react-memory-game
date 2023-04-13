import React, { useState } from 'react'
import Card from './Card'

const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, image: 'assets/images/card-back-1.jpg' },
    { id: 2, image: 'assets/images/card-back-1.jpg' },
    { id: 3, image: 'assets/images/card-back-2.jpg' },
    { id: 4, image: 'assets/images/card-back-2.jpg' },
    { id: 5, image: 'assets/images/card-back-3.jpg' },
    { id: 6, image: 'assets/images/card-back-3.jpg' },
    { id: 7, image: 'assets/images/card-back-4.jpg' },
    { id: 8, image: 'assets/images/card-back-4.jpg' }
  ])

  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} />
      ))}
    </div>
  )
}

export default Board
