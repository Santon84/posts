import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments';
import { Card, Row, Col} from 'react-bootstrap'
import Avatar from './Avatar';
function Post({postId, title, body, userId}) {
    
  const userLink = `/user/${userId}`;
    return (
        <Card key={postId} className="m-4">
        <Row>
            <Col sm={1} className='pl-4 pt-4'>
                <Avatar url={userLink}/>
            </Col>
            <Col sm={10}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text >
                    {body}
                    </Card.Text>
                    <Comments id={postId}/>
                </Card.Body>
            </Col>
        </Row>
        
      </Card>    
   

    
  )
}

export default Post
