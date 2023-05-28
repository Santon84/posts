import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from './user'
import createSagaMiddleware from 'redux-saga';
import { watcherPosts, watcherUser, watcherUserPosts } from "../sagas/rootSaga";
import { userPostsReducer } from "./userPosts";
import { postsReducer } from "./posts";
const sagaMiddleware = createSagaMiddleware();
//const middleware = [sagaMiddleware];
const store = configureStore({
    reducer: {
        user: userReducer, 
        userPosts: userPostsReducer, 
        posts: postsReducer,
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watcherUser);
sagaMiddleware.run(watcherUserPosts);
sagaMiddleware.run(watcherPosts);

export default store
