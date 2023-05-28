import axios from "axios";

export const API_URL_POSTS = 'https://jsonplaceholder.typicode.com/posts/'
export const API_URL_USER = 'https://jsonplaceholder.typicode.com/users/'
export const API_URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId='
export const API_URL_USER_POSTS = 'https://jsonplaceholder.typicode.com/posts/?userid='
export const getAllPosts = async () => 
    await axios.get('https://jsonplaceholder.typicode.com/posts')


export const getUser = async (id,dispatch) => {
   
   dispatch({ type: 'GET_TODOS_REQUEST' });
    return await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
      .then((response) => dispatch({ type: 'GET_TODOS_SUCCESS', payload: response }))
      .catch((error) => dispatch({ type: 'GET_TODOS_FAILURE', payload: error, error: true }));
  }; 


