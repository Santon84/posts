import { takeEvery, takeLatast } from 'redux-saga/effects'
import { handleGetUser } from '../handlers/user'
import { GET_USER } from '../store/user'



export function* watcherSaga() {
    yield takeEvery(GET_USER, handleGetUser)
}