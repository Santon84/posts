import React, { useEffect, useState } from 'react'
import Post from './Post';
import { SET_POSTS_CURRENT_PAGE, SET_POSTS_LOADING, getPosts, setPosts } from '../../redux/store/posts';
import { useDispatch, useSelector } from 'react-redux';
import PaginationBlock from '../Pagination/PaginationBlock';
import PulseLoader from 'react-spinners/PulseLoader';
import Filter from '../Filter/Filter';


const override = {
    position: "absolute",
    zIndex:"9999",
    top:0,
    left:0,
    height: "100%",
    width: "100%",
    backgroundColor:"rgba(0,0,0,.4)",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    borderColor: "red",
  };


function Posts() {
    
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts)
  const error = useSelector((state) => state.posts.errorMessage)
  const loading = useSelector((state) => state.posts.isLoading)
  const postsPerPage = useSelector((state) => state.posts.postsPerPage)
  const currentPage = useSelector((state) => state.posts.currentPage)
  const [filter, setFilter] = useState('');

  useEffect(() => {

      dispatch({type: SET_POSTS_LOADING});
      const timer = setTimeout(() => {

          dispatch(getPosts())
      }, 1000)
      return () => {
          dispatch(setPosts(null));
          clearTimeout(timer);
      }
  },[dispatch])
    
  function clickHandle(pageNumber) {

    dispatch({type: SET_POSTS_CURRENT_PAGE, payload: pageNumber});
  }
 
  return (
    <div>
       <PulseLoader
        color={'#36d7b7'}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
      {error && <p>{error}</p>}
      
      {<Filter handleSearch={setFilter} filter={filter}/>}
      
      {!loading && posts && posts?.filter(post => post.title.includes(filter))?.slice((currentPage * postsPerPage) - postsPerPage, currentPage * postsPerPage)?.map(data => {
        return (
          <Post postId={data.id} title={data.title} body={data.body} userId={data.userId}/>
        )
        })
      }
      <PaginationBlock totalPages={Math.ceil(posts?.filter(post => post.title.includes(filter)).length/postsPerPage)} currentPage={currentPage} clickHandle={clickHandle}/>
    </div>
  )
}

export default Posts
