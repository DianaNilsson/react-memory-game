import React, { useState } from 'react'
import Card from '../card/Card'
import cardBack1 from '../../assets/images/card-back-1.jpg'
import cardBack2 from '../../assets/images/card-back-2.jpg'
import cardBack3 from '../../assets/images/card-back-3.jpg'
import cardBack4 from '../../assets/images/card-back-4.jpg'

const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, image: cardBack1 },
    { id: 2, image: cardBack1 },
    { id: 3, image: cardBack2 },
    { id: 4, image: cardBack2 },
    { id: 5, image: cardBack3 },
    { id: 6, image: cardBack3 },
    { id: 7, image: cardBack4 },
    { id: 8, image: cardBack4 }
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
