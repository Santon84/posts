import { takeEvery, takeLatast } from 'redux-saga/effects'
import { handleGetAllPosts, handleGetUser, handleGetUserPosts } from '../handlers/user'
import { GET_USER } from '../store/user'
import { GET_USER_POSTS } from '../store/userPosts'
import { GET_POSTS } from '../store/posts'



export function* watcherUser() {
    yield takeEvery(GET_USER, handleGetUser)
}

export function* watcherUserPosts() {
    yield takeEvery(GET_USER_POSTS, handleGetUserPosts);
}

export function* watcherPosts() {
    yield takeEvery(GET_POSTS, handleGetAllPosts);
}