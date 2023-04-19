import React from 'react'

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
