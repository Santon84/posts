import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS, API_URL_USER } from '../../api/api';
import Post from '../Posts/Post';
import Avatar from '../Posts/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../../redux/store/user';
import { requestGetUser2 } from '../../redux/requests/user';
import UserPosts from './UserPosts';
import { getUserPosts } from '../../redux/store/userPosts';

function User() {
    
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.user)
    const error = useSelector((state) => state.user.errorMessage)
    const loading = useSelector((state) => state.user.isLoading)
    const { userId } = useParams();


    useEffect(() => {
        dispatch(getUser(userId))
        return () => dispatch(setUser(null));
    },[userId, dispatch])
  
return (
    <div>
    {loading && 'Loading...'}
    {error && <p>{error}</p>}
    {user && (<div className='ml-4'>
                <Avatar />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                
                </div>) }
    <UserPosts userId={userId}/>            
    
    {/* {error && 'No user found'}  */}
      
    </div>
  )
}

export default User
