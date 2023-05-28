export const GET_USER_POSTS = "GET_USER_POSTS";
export const SET_USER_POSTS = "SET_USER_POSTS";
export const GET_USER_POSTS_ERROR = "GET_USER_POSTS_ERROR";
export const GET_USER_POSTS_END = "GET_USER_POSTS_END";

export const getUserPosts = (action) => ({
    type: GET_USER_POSTS,
    action
})
export const setUserPosts = (userPosts) => ({
    type: SET_USER_POSTS,
    userPosts
})
const initialState = { 
    userPosts: undefined,
    errorMessage: '',
    isLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export const userPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_POSTS:
            const { userPosts } = action;
            return {...state, userPosts}
        case GET_USER_POSTS:
            return {...state, isLoading: true}
        case GET_USER_POSTS_END :
            return {...state, isLoading: false}
        case GET_USER_POSTS_ERROR:
            return {...state, errorMessage: action.payload, isLoading: false}

        default: 
            return state;
    }
}