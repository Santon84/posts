import React, { useEffect, useState } from 'react'
import Post from './Post';
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS } from '../../api/api';
import { getPosts, setPosts } from '../../redux/store/posts';
import { useDispatch, useSelector } from 'react-redux';
function Posts() {
    
    // getAllPosts().then(data => setPosts(data.data));
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts)
    const error = useSelector((state) => state.posts.errorMessage)
    const loading = useSelector((state) => state.posts.isLoading)
    useEffect(() => {
      dispatch(getPosts())
      return () => dispatch(setPosts(null));
    },[dispatch])

  return (
    <div>
      {loading && 'Loading...'}
      {error && <p>{error}</p>}
      
      {posts && !loading && posts.map(data => {
        return <Post postId={data.id} title={data.title} body={data.body} userId={data.userId}/>
        })
      }
    </div>
  )
}

export default Posts
