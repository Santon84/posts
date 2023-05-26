import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments';
import { Card, Button } from 'react-bootstrap';
function Post({postId, title, body, userId}) {
    
  const userLink = `/user/${userId}`;
    return (

        <Card key={postId} className="m-4">
        <Card.Body>
        <Link to={userLink}><Card.Title>{title}</Card.Title></Link>
          <Card.Text >
          {body}
          </Card.Text>
          <Comments id={postId}/>
        </Card.Body>
      </Card>    
   

    
  )
}

export default Post
