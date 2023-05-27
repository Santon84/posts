import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS, API_URL_USER } from '../../api/api';
import Post from '../Posts/Post';
import Avatar from '../Posts/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../../redux/store/user';
import { requestGetUser2 } from '../../redux/requests/user';

function User() {
    
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.user)
    const error = useSelector((state) => state.user.errorMessage)
    const loading = useSelector((state) => state.user.isLoading)
    const todo = useSelector((state) => state.todo)
    const { userId } = useParams();
    const fetchUrl = API_URL_POSTS+'?userid='+userId
    //const {data, loading, error} = useFetch(API_URL_USER+userId);
    const {data:posts} = useFetch(fetchUrl);
    // if(error){
    //     console.log(error)
    // }
    
    

    useEffect(() => {
        dispatch(getUser(userId,dispatch))
        return () => dispatch(setUser(null));
    },[userId, dispatch])
    useEffect(() => {
        console.log(todo);
    }, [todo])
return (
    <div>
    {loading && 'Loading...'}
    {error && <p>{error}</p>}
    {user && (<div className='ml-4'>
                <Avatar />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                
                </div>) }
                
    {posts && posts.map(post => (
        <>
        <h6 className='mt-5'>Посты пользователя:</h6>
        <Post key={post.id} postId={post.id} title={post.title} body={post.body} userId={post.userId}/>
        </>
    )
     )}
    {/* {error && 'No user found'}  */}
      
    </div>
  )
}

export default User
