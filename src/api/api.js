import axios from "axios";

export const API_URL_POSTS = 'https://jsonplaceholder.typicode.com/posts/'
export const API_URL_USER = 'https://jsonplaceholder.typicode.com/users/'
export const API_URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId='

export const getAllPosts = async () => 
    await axios.get('https://jsonplaceholder.typicode.com/posts')


export const getUser = async (id) => 
    await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
