export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const GET_USER_ERROR = "SET_USER_ERROR";
export const GET_USER_END = "GET_USER_END";
export const SET_USER_LOADING = "SET_USER_LOADING";

export const getUser = (action) => ({
    type: GET_USER,
    action
})
export const setUser = (user) => ({
    type: SET_USER,
    user
})
const initialState = { 
    user: undefined,
    errorMessage: '',
    isLoading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return {...state, user}
        case GET_USER:
            return {...state, isLoading: true}
        case SET_USER_LOADING:
            return {...state, isLoading: true}
        case GET_USER_END :
            return {...state, isLoading: false}
        case GET_USER_ERROR:
            return {...state, errorMessage: action.payload, isLoading: false}

        default: 
            return state;
    }
}