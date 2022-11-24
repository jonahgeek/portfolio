import { Spinner } from "components/Elements";
import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
} from "features/auth";
import storage from "utils/storage";
import { initReactQueryAuth } from "react-query-auth";
import { useNotificationStore } from "stores/notifications";

async function handleUserResponse(data) {
  const { token, user, message, status } = data;
  if (token) {
    storage.setToken(token);
  }

  // if no token redirect to login
  useNotificationStore.getState().addNotification({
    type: status,
    title: status,
    message,
  });

  if (!token && !user) {
    return window.location.assign("/auth/login");
  }
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    var data = await getUser();

    return data;
  }
  return null;
}

async function loginFn(data) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);
