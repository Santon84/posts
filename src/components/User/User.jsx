import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Avatar from '../Posts/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser, SET_USER_LOADING } from '../../redux/store/user';
import UserPosts from './UserPosts';
import PulseLoader from 'react-spinners/PulseLoader';
import { Button } from 'react-bootstrap';

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


function User() {
    
    const dispatch = useDispatch();
    
    const user = useSelector((state) => state.user.user)
    const error = useSelector((state) => state.user.errorMessage)
    const loading = useSelector((state) => state.user.isLoading)
    const { userId } = useParams();


    useEffect(() => {
        dispatch({type: SET_USER_LOADING})
        const timer = setTimeout(() => {

            dispatch(getUser(userId))
        }, 1000)
        return () => {
            dispatch(setUser(null));
            clearTimeout(timer);
        }
    },[userId, dispatch])
  
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
    {!loading && user && (<div className='ml-4'>
                
                <Avatar />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                
                <Link to='/'><Button  variant="primary" size="sm">Назад</Button></Link>
                </div>) }
    {!loading && user && <UserPosts userId={userId}/>   }         
    
      
    </div>
  )
}

export default User
