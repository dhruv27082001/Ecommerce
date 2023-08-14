import { LOGIN_SUCCESS, LOGIN_FAILD } from "./constant";
import axiosUtil from "../../config/index";
import axios from "axios";

axiosUtil.initialize();

export const loginUser = (data) => {
    return (dispatch) => {
        return axios.post("auth/login", {
            username: data.username,
            password: data.password
        })
            .then((response) => {
                if (response.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                    
                    const userData = {
                        username: data.username,
                        password: data.password,
                        token: token,
                    };

                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: userData,
                    });
                    return response;
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_FAILD,
                    payload: err.response.data,
                });
                throw err;
            });
    };
};
