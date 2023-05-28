import React from 'react'
import { Card } from 'react-bootstrap'

function Comment({name, body}) {
  return (
    <Card className='m-4'>
      <Card.Body>
        <Card.Title style={{fontSize:'.9rem'}}>{name}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comment
