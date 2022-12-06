import React from 'react'

const FoodItem = ({ name, src, time, place }) => {
  return (
    <article>
        <h4>{name}</h4>
        <img height={400} width={400} src={src} alt={name.toLowerCase()}/>
        <p>Best time to eat: <span>{time}</span></p>
        <p>Best place: <span>{place}</span></p>
    </article>
  )
}

export default FoodItem