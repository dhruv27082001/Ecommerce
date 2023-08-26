import { LOGIN_SUCCESS, USER_SUCCESS, USER_FAILED, SET_USER, SET_USER_FAILED } from "./constant";
import axiosUtil from "../../config/index";
import axios from "axios";
import NotiStackComponent from "../../components/NotiStackComponent";

axiosUtil.initialize();

export const loginUser = (data) => {
    const notiComponent = NotiStackComponent();

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
                notiComponent.showSnackbar("Invalid username or password", "error");
                throw err;  
            });
    };
};


export const customerList = () => {
    const notiComponent = NotiStackComponent();

    return (dispatch) => {
        return axios.get('/users')
            .then((response) => {
                dispatch({
                    type: SET_USER,  
                    payload: response?.data,  
                });
            })
            .catch((error) => {
                dispatch({
                    type: SET_USER_FAILED,  
                    error: error.message,
                });
                console.log("error",error);
                notiComponent.showSnackbar(`${error}`, "error");
            });
    };
};
