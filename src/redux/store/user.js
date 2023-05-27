export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_USER_ERROR = "SET_USER_ERROR";

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
    errorMessage: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return {...state, user}
        case SET_USER_ERROR:
            return {...state, errorMessage: action.payload}
        default: 
            return state;
    }
}