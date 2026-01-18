// import React from 'react'
import { Check } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.time}</h3>
      <div>
        <p>{props.work}</p>
        <button id="done-btn" type="button"><Check/></button>
      </div>
      <button id="delete-btn" type="button">Delete</button>
      <button id="edit-btn" type="button">Edit</button>
    </div>
  )
}

export default Card
