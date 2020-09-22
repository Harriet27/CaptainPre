import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    USER_START,
    USER_SUCCESS,
    USER_FAILED,
} from '../Cases';

export const addUser = (form) => {
    return async dispatch => {
        dispatch({
            type: USER_START,
        });
        try {
            let response = await Axios.post(`${API_URL}/users/signup`, form);
            dispatch({
                type: USER_SUCCESS,
                payload: response.data.data,
            });
        } catch {
            dispatch({
                type: USER_FAILED,
            });
        }
    };
};

export const getUser = () => {
    return async dispatch => {
        dispatch({
            type: USER_START,
        });
        try {
            let response = await Axios.get(`${API_URL}/users/list`);
            dispatch({
                type: 'GET_USER',
                payload: response.data.data,
            });
        } catch {
            dispatch({
                type: USER_FAILED,
            });
        }
    };
};
