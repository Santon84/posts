import axios from "axios";

export const requestGetUser = async (id) => 
    await axios.get('https://jsonplaceholder.typicode.com/users/'+id)


// export const requestGetUser = async (id,dispatch) => {
   
//     dispatch({ type: 'GET_TODOS_REQUEST' });
//      return await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
//        .then((response) => dispatch({ type: 'GET_TODOS_SUCCESS', payload: response }))
//        .catch((error) => dispatch({ type: 'GET_TODOS_FAILURE', payload: error, error: true }));
//    }; 
