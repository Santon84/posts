import React from 'react'

function Comment({name, body}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Comment
