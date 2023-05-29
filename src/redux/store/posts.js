export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const SET_POSTS_ERROR = "GET_POSTS_ERROR";
export const SET_POSTS_END = "GET_POSTS_END";
export const SET_POSTS_CURRENT_PAGE = "SET_POSTS_CURRENT_PAGE";

export const getPosts = () => ({
    type: GET_POSTS,
    
})
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})
const initialState = { 
    posts: undefined,
    errorMessage: '',
    isLoading: false,
    currentPage: 1,
    postsPerPage: 10
}

// eslint-disable-next-line import/no-anonymous-default-export
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            const { posts } = action;
            return {...state, posts}
        case GET_POSTS:
            return {...state, isLoading: true}
        case SET_POSTS_END :
            return {...state, isLoading: false}
        case SET_POSTS_ERROR:
            return {...state, errorMessage: action.payload, isLoading: false}
        case SET_POSTS_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
    
        default: 
            return state;
    }
}