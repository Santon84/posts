import axios from "axios";

export const requestGetUser = async (id) => 
    await axios.get('https://jsonplaceholder.typicode.com/users/'+id)