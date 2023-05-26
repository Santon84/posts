import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS, API_URL_USER } from '../../api/api';
import Post from '../Posts/Post';
import Avatar from '../Posts/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setUser, getUser } from '../../redux/store/user';


function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
    const { userId } = useParams();
    const fetchUrl = API_URL_POSTS+'?userid='+userId
    const {data, loading, error} = useFetch(API_URL_USER+userId);
    const {data:posts} = useFetch(fetchUrl);
    if(error){
        console.log(error)
    }
    
    function handleClick(user) {
        dispatch(setUser(user))
    }

    useEffect(() => {
        dispatch(getUser(userId))
        //console.log(user)
    },[])
return (
    <div>
    {loading && 'Loading...'}
    {data && !loading && (<>
                <Avatar />
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <Button onClick={() => handleClick({id:1, name: 'Anton'})} variant="primary" size="sm">Добавить пользователя</Button>
                {user?.name}
                </>) }
                
    {posts && !loading && posts.map(post => (
        <>
        <h6 className='mt-5'>Посты пользователя:</h6>
        <Post key={post.id} postId={post.id} title={post.title} body={post.body} userId={post.userId}/>
        </>
    )
     )}
    {error && 'No user found'} 
      
    </div>
  )
}

export default User
