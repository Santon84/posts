import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS, API_URL_USER } from '../../api/api';
import Post from '../Posts/Post';
import Avatar from '../Posts/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setCurrentUser } from '../../redux/store/UserStore';


function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentUser)
    const { userId } = useParams();
    const fetchUrl = API_URL_POSTS+'?userid='+userId
    const {data, loading, error} = useFetch(API_URL_USER+userId);
    const {data:posts} = useFetch(fetchUrl);
    if(error){
        console.log(error)
    }
    console.log(user)
    function handleClick(user) {
        dispatch(setCurrentUser(user));
    }
return (
    <div>
    {loading && 'Loading...'}
    {data && !loading && (<>
                <Avatar />
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <Button onClick={() => handleClick({id:1, name: 'John'})} variant="primary" size="sm">Добавить пользователя</Button>
                {user.name}
                </>) }
                <h6 className='mt-5'>Посты пользователя:</h6>
    {posts && !loading && posts.map(post => <Post key={post.id} postId={post.id} title={post.title} body={post.body} userId={post.userId}/> )}
    {error && 'No user found'} 
      
    </div>
  )
}

export default User
