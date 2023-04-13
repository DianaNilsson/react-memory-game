import React, { useState, useEffect } from 'react'
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

  const [selectedCards, setSelectedCards] = useState([])
  const [canSelectCards, setCanSelectCards] = useState(true)

  const handleCardClick = (id) => {
    if (canSelectCards) {
      const clickedCard = cards.find((card) => card.id === id)

      if (!clickedCard.isFlipped) {
        const updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )
        setCards(updatedCards)
        setSelectedCards([...selectedCards, clickedCard])

        if (selectedCards.length === 1) {
          setCanSelectCards(false)
          setTimeout(() => {
            const [firstCard] = selectedCards
            const secondCard = clickedCard
            if (firstCard.image !== secondCard.image) {
              const updatedCards = cards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
              setCards(updatedCards)
            }
            setSelectedCards([])
            setCanSelectCards(true)
          }, 2000)
        }
      }
    }
  }

  useEffect(() => {
    const shuffledCards = cards.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
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
