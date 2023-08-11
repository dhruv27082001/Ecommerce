import axios from 'axios';

const axiosUtil = {
  initialize: () => {
    axios.defaults.baseURL = "https://fakestoreapi.com";

    axios.interceptors.request.use(
      (axiosConfig) => {
        axiosConfig.headers['Content-Type'] = 'application/json';
        return axiosConfig;
      },
      (error) => {
        return Promise.reject(error); // Ensure you return the rejected promise
      },
    );

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error); // Ensure you return the rejected promise
      },
    );
  },
};

export default axiosUtil;
