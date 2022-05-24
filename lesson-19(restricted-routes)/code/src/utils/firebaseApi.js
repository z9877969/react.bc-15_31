import axios from "axios";

const API_KEY = "AIzaSyAvqE0IMdhcoC73Ym5t8naIkV9NzE_k8Fc";
const endPoints = {
  REGISTER: "accounts:signUp",
  LOGIN: "accounts:signInWithPassword",
  CUR_USER: "accounts:lookup",
  REFRESH_TOKEN: "/token",
};
const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc-15-31-default-rtdb.firebaseio.com",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

axios.defaults.baseURL = "https://bc-15-31-default-rtdb.firebaseio.com";

const transformObjectData = (objData) =>
  objData ? Object.entries(objData).map(([id, data]) => ({ ...data, id })) : [];
const setBaseUrl = (url) => (axios.defaults.baseURL = url);
const setParams = (params) => (axios.defaults.params = params);

export const getTodosApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });

  return axios
    .get(`/users/${localId}/todos.json`)
    .then(({ data }) => transformObjectData(data));
};

export const addTodoApi = ({ todo, idToken, localId }) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });
  return axios
    .post(`/users/${localId}/todos.json`, todo)
    .then(({ data }) => ({ ...todo, id: data.name }));
};

export const removeTodoApi = ({ id, idToken, localId }) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });
  return axios.delete(`/users/${localId}/todos/${id}.json`);
};

export const registerUserApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({ key: API_KEY });
  return axios
    .post(endPoints.REGISTER, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      email: data.email,
      localId: data.localId,
      refreshToken: data.refreshToken,
    }));
};

export const loginUserApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({ key: API_KEY });
  return axios
    .post(endPoints.LOGIN, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      email: data.email,
      localId: data.localId,
      refreshToken: data.refreshToken,
    }));
};

export const getCurUserApi = (idToken) => {
  setParams({ key: API_KEY });
  setBaseUrl(baseUrl.AUTH);
  return axios.post(endPoints.CUR_USER, { idToken }).then(({ data }) => {
    const { localId, email } = data.users[0];
    return { localId, email };
  });
};

// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH_TOKEN);
  setParams({ key: API_KEY });
  return axios
    .post(endPoints.REFRESH_TOKEN, {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    .then(({ data }) => ({
      idToken: data.id_token,
      localId: data.user_id,
      refreshToken: data.refresh_token,
    }));
};

// {
//   "expires_in": "3600",
//   "token_type": "Bearer",
//   "refresh_token": "[REFRESH_TOKEN]",
//   "id_token": "[ID_TOKEN]",
//   "user_id": "tRcfmLH7o2XrNELi...",
//   "project_id": "1234567890"
// }
