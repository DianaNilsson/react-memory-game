import React from 'react'

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="card back" />
    </div>
  )
}

export default Card
