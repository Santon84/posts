import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments';
function Post({postId, title, body, userId}) {
    
  const userLink = `/user/${userId}`;
    return (
    <div key={postId}>
      <Link to={userLink}><h2>{title}</h2></Link>
      <p>{body}</p>
      <Comments id={postId}/>
    </div>
  )
}

export default Post
