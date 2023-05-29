import React, { useEffect, useState } from 'react'
import Post from './Post';
import useFetch from '../../hooks/useFetch';
import { API_URL_POSTS } from '../../api/api';
import { SET_POSTS_CURRENT_PAGE, getPosts, setPosts } from '../../redux/store/posts';
import { useDispatch, useSelector } from 'react-redux';
import PaginationBlock from '../Pagination/PaginationBlock';
function Posts() {
    
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts)
    
    const error = useSelector((state) => state.posts.errorMessage)
    const loading = useSelector((state) => state.posts.isLoading)
    const postsPerPage = useSelector((state) => state.posts.postsPerPage)
    const currentPage = useSelector((state) => state.posts.currentPage)

    const postsOnPage = posts?.slice((currentPage * postsPerPage) - postsPerPage, currentPage * postsPerPage);

    useEffect(() => {
      dispatch(getPosts())
      return () => dispatch(setPosts(null));
    },[dispatch])
    
    function clickHandle(pageNumber) {

      dispatch({type: SET_POSTS_CURRENT_PAGE, payload: pageNumber});
    }
    
  return (
    <div>
      {loading && 'Loading...'}
      {error && <p>{error}</p>}
      
      {posts && !loading && postsOnPage.map(data => {
        return <Post postId={data.id} title={data.title} body={data.body} userId={data.userId}/>
        })
      }
      <PaginationBlock totalPages={Math.ceil(posts?.length/postsPerPage)} currentPage={currentPage} clickHandle={clickHandle}/>
    </div>
  )
}

export default Posts
