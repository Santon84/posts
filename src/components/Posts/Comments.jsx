import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import useFetchDep from '../../hooks/useFetchDep';
import { API_URL_COMMENTS } from '../../api/api';
import Comment from './Comment';

function Comments({id}) {
  const [isClicked, setIsClicked] = useState(false);
  const {data, loading, error} = useFetchDep(API_URL_COMMENTS+id, isClicked )

  function handleClick(id) {
    if (!id) return;
    console.log(id);
    setIsClicked(prev => !prev);
  }
  
  return (
    <div>
      
      <Button onClick={() => handleClick(id)} variant="primary" size="sm">Комментарии</Button>
      {data && isClicked && data.map(comment => <Comment key={comment.id} name={comment.name} body={comment.body}/>)}
    </div>
  )
}

export default Comments
