import axios from "axios";
import { API_URL_POSTS, API_URL_USER, API_URL_USER_POSTS } from '../../api/api'


export const requestGetUser = async (userId) => 
    await axios.get(API_URL_USER+userId)


export const requestGetUserPosts = async (userId) => 
    await axios.get(API_URL_USER_POSTS+userId)  


export const requestGetAllPosts = async () => 
    await axios.get(API_URL_POSTS)  
    
    
