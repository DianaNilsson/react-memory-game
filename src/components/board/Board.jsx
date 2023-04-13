import React, { useState } from 'react'
import Card from '../card/Card'
import cardBack1 from '../../assets/images/card-back-1.jpg'
import cardBack2 from '../../assets/images/card-back-2.jpg'
import cardBack3 from '../../assets/images/card-back-3.jpg'
import cardBack4 from '../../assets/images/card-back-4.jpg'

const Board = () => {
  const [cards, setCards] = useState([
    { id: 1, image: cardBack1, isFlipped: false },
    { id: 2, image: cardBack1, isFlipped: false },
    { id: 3, image: cardBack2, isFlipped: false },
    { id: 4, image: cardBack2, isFlipped: false },
    { id: 5, image: cardBack3, isFlipped: false },
    { id: 6, image: cardBack3, isFlipped: false },
    { id: 7, image: cardBack4, isFlipped: false },
    { id: 8, image: cardBack4, isFlipped: false }
  ])

  const shuffleCards = () => {
    setCards((prevState) => {
      const shuffledCards = [...prevState]
      shuffledCards.sort(() => Math.random() - 0.5)
      return shuffledCards
    })
  }

  const handleCardClick = (id) => {
    setCards((prevState) =>
      prevState.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    )
  }

  // Shuffle cards on component mount
  React.useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  )
}

export default Board
