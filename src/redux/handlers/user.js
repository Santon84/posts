import { call, put } from 'redux-saga/effects';
import { requestGetUser } from '../requests/user';
import { setUser } from '../store/user';


export function* handleGetUser(action) {
    try {
        //console.log(action.action)
        const response = yield call(requestGetUser, action.action)
        const { data } = response;
        yield put(setUser(data))
    }catch (err) {
    console.log(err)
    }
}