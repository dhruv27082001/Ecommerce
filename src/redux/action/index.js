import { LOGIN_SUCCESS, LOGIN_FAILD, USER_SUCCESS, USER_FAILED } from "./constant";
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
                throw err;  // Rethrow the error to be caught by the caller
            });
    };
};

export const userList = () => {
    const notiComponent = NotiStackComponent();

    return (dispatch) => {
        return axios.get('/users')
            .then((response) => {
                dispatch({
                    type: USER_SUCCESS,  
                    payload: response?.data,
                   
                });
                 console.log("payload:",response?.data)
            })
            .catch((error) => {
                dispatch({
                    type: USER_FAILED,  
                    error: error.message,
                });
                notiComponent.showSnackbar(`${error}`, "error");
            });
    };
};
