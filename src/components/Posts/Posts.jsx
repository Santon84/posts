import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../api/api'
import Post from './Post';
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS } from '../../api/api';
function Posts() {
    
    // getAllPosts().then(data => setPosts(data.data));
    const {data, loading, error} = useFetch(API_URL_POSTS)
   
    if(error){
        console.log(error)
    }
  return (
    <div>
        {loading && 'Loading...'}

      {data && !loading && data.slice(0,10).map(data => {
        return <Post postId={data.id} title={data.title} body={data.body} userId={data.userId}/>
        })
      }
    </div>
  )
}

export default Posts
