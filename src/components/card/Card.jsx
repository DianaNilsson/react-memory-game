import React from 'react'
import './Card.css'

const Card = ({ image, isFlipped, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : 'not-flipped'}`}
      onClick={onClick}
    >
      {isFlipped && <img src={image} alt="card" />}
    </div>
  )
}

export default Card
