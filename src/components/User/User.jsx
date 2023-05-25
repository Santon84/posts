import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { API_URL_COMMENTS, API_URL_POSTS, API_URL_USER } from '../../api/api';
import Post from '../Posts/Post';

function User() {
    const { userId } = useParams();
    const fetchUrl = API_URL_POSTS+'?userid='+userId
    const {data, loading, error} = useFetch(API_URL_USER+userId);
    const {data:posts} = useFetch(fetchUrl);
    if(error){
        console.log(error)
    }
return (
    <div>
    {loading && 'Loading...'}
    {data && !loading && (<>
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                </>) }
    {posts && !loading && posts.map(post => <Post postId={post.id} title={post.title} body={post.body} userId={post.userId}/> )}
    {error && 'No user found'} 
      
    </div>
  )
}

export default User
