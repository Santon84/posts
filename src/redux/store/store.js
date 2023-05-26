import { configureStore, applyMiddleware } from "@reduxjs/toolkit";


import userReducer from './user'
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
//const middleware = [sagaMiddleware];
const store = configureStore({
    reducer: {
        user: userReducer,
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watcherSaga);

export default store
