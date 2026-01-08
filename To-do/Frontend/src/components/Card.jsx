// import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <h3>{props.time}</h3>
        <p>{props.work}</p>
        <button id="delete-btn" type="button">Delete</button>
        <button id="edit-btn" type="button">Edit</button>
    </div>
  )
}

export default Card
