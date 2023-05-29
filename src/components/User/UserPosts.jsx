import React, { useEffect } from 'react'
import Post from '../Posts/Post'
import { getUserPosts, setUserPosts } from '../../redux/store/userPosts';
import { useDispatch, useSelector } from 'react-redux';

function UserPosts({userId}) {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.userPosts.userPosts)
  const error = useSelector((state) => state.userPosts.errorMessage)
  const loading = useSelector((state) => state.userPosts.isLoading)


  useEffect(() => {
    dispatch(getUserPosts(userId))
    return () => dispatch(setUserPosts(null));
  },[userId, dispatch])

  useEffect(() => {
    console.log(userPosts)
  },[userPosts])

  return (
    <>
      
      {error && <p>{error}</p>}
      <h6 className='mt-5'>Посты пользователя:</h6>
      {userPosts && userPosts.map(post => (
        <Post key={post.id} postId={post.id} title={post.title} body={post.body} userId={post.userId}/>
        )
       )}
    </>
  )
}

export default UserPosts
