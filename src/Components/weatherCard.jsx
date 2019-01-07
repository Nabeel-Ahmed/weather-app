import React from 'react'

export default function weatherCard(props) {
  return (
    <div>
      <h1> {props.location} </h1>
      <h2> {props.weather} </h2>
      <h3> {props.temp} </h3>
      <p> card is heree</p>
    </div>
  )
}
