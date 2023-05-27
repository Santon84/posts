import { call, put } from 'redux-saga/effects';
import { requestGetUser } from '../requests/user';
import { GET_USER_END, GET_USER_ERROR, setUser } from '../store/user';


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