import { API_URL } from "config";
import { useNotificationStore } from "stores/notifications";
import storage from "utils/storage";
import Axios from "axios";
import PropTypes from "prop-types";

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

authRequestInterceptor.propTypes = {
  config: PropTypes.any,
};

export const axios = Axios.create({
  baseURL: API_URL,
});
// timeout in milliseconds
axios.defaults.timeout = 50000;
axios.defaults.timeoutErrorMessage =
  "😟 Server is taking longer than usual to respond.";

// add multipart/form-data support
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });

    return Promise.reject(error);
  }
);
