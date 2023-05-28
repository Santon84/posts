import { call, put } from 'redux-saga/effects';
import { requestGetAllPosts, requestGetUser, requestGetUserPosts } from '../requests/user';
import { GET_USER_END, GET_USER_ERROR, setUser } from '../store/user';
import { GET_USER_POSTS_ERROR, GET_USER_POSTS_END, setUserPosts } from '../store/userPosts';
import { SET_POSTS_END, SET_POSTS_ERROR, setPosts } from '../store/posts';

export function* handleGetUser(action) {
    try {
        //console.log(action.action)
        const response = yield call(requestGetUser, action.action)
        const { data } = response;
        yield put(setUser(data))
    }catch (err) {
        console.log(err.message)
        yield put({type: GET_USER_ERROR, payload: err.message})
    }finally {
        yield put({type: GET_USER_END})
    }
}

export function* handleGetUserPosts(action) {
    try {
        const response = yield call(requestGetUserPosts, action.action)
        const { data } = response;
        yield put(setUserPosts(data))
    }catch (err) {
        console.log(err.message)
        yield put({type: GET_USER_POSTS_ERROR, payload: err.message})
    }finally {
        yield put({type: GET_USER_POSTS_END})
    }
}


export function* handleGetAllPosts() {
    try {
        const response = yield call(requestGetAllPosts)
        const { data } = response;
        yield put(setPosts(data))
    }catch (err) {
        console.log(err.message)
        yield put({type: SET_POSTS_ERROR, payload: err.message})
    }finally {
        yield put({type: SET_POSTS_END})
    }
}