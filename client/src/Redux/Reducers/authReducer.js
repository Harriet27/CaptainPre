import {
    USER_START,
    USER_SUCCESS,
    USER_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    userData: [],
    loading: false,
    userList: [],
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_START:
            return {
                ...state,
                loading: true,
            };
        case USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                loading: false,
            };
        case USER_FAILED:
            return {
                ...state,
                loading: false,
            };
        case 'GET_USER':
            return {
                ...state,
                userList: action.payload,
                loading: false,
            }
        default: return state;
    };
};
