import { LOGIN_SUCCESS, LOGIN_FAILD } from "./constant";
import axios from "axios";

export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post("'https://fakestoreapi.com/auth/login", {
            username: data.username,
            password: data.password
        })
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: response.data,
                    });
                    return response;
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_FAILD,
                    payload: err.response.data, // You can customize this payload
                });
                throw err; // Rethrow the error to maintain the chain of promises
            });
    }
};
