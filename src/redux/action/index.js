import { LOGIN_SUCCESS, LOGIN_FAILD } from "./constant";
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
                notiComponent.showSnackbar("Invalid username or password123", "error");

            });
    };
};
