import React, { useState, useEffect } from 'react'
import './Board.css'
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
        let updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )

        if (selectedCards.length === 0) {
          setSelectedCards([clickedCard])
        } else if (selectedCards.length === 1) {
          setCanSelectCards(false)
          setSelectedCards([...selectedCards, clickedCard])

          const [firstCard] = selectedCards

          if (clickedCard.image === firstCard.image) {
            updatedCards = updatedCards.map((card) =>
              card.id === firstCard.id || card.id === clickedCard.id
                ? { ...card, isMatched: true }
                : card
            )

            const matchedCards = updatedCards.filter(
              (card) => card.isMatched === true
            )

            if (matchedCards.length === cards.length) {
              alert('You win!')
            }

            setSelectedCards([])
            setCanSelectCards(true)
          } else {
            setTimeout(() => {
              updatedCards = updatedCards.map((card) =>
                card.id === firstCard.id || card.id === clickedCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )

              setSelectedCards([])
              setCards(updatedCards)
              setCanSelectCards(true)
            }, 2000)
          }
        }

        setCards(updatedCards)
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
