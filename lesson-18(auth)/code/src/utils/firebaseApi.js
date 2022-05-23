import axios from "axios";

const API_KEY = "AIzaSyAvqE0IMdhcoC73Ym5t8naIkV9NzE_k8Fc";
const endPoints = {
  REGISTER: "accounts:signUp",
  LOGIN: "accounts:signInWithPassword",
  CUR_USER: "accounts:lookup",
};
const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc-15-31-default-rtdb.firebaseio.com",
};

const users = {
  userId: {
    todos: {
      todoId: {
        title: "",
        descr: "",
        // ....
      },
    },
  },
};

// https://bc-15-31-default-rtdb.firebaseio.com/todos.json
// "https://bc-15-31-default-rtdb.firebaseio.com/users/{localId}/todos.json?auth={idToken}"
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

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// {"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}
export const registerUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
  axios.defaults.params = {
    key: API_KEY,
  };
  return axios
    .post(endPoints.REGISTER, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      email: data.email,
      localId: data.localId,
    }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export const loginUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
  axios.defaults.params = {
    key: API_KEY,
  };
  return axios
    .post(endPoints.LOGIN, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      email: data.email,
      localId: data.localId,
    }));
};

// {
//   "idToken": "[ID_TOKEN]",
//   "email": "[user@example.com]",
//   "refreshToken": "[REFRESH_TOKEN]",
//   "expiresIn": "3600",
//   "localId": "tRcfmLH7..."
// }

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
export const getCurUserApi = (idToken) => {
  setParams({ key: API_KEY });
  setBaseUrl(baseUrl.AUTH);
  return axios.post(endPoints.CUR_USER, { idToken }).then(({ data }) => {
    const { localId, email } = data.users[0];
    return { localId, email };
  });
};
// {
//   "users": [
//     {
//       "localId": "ZY1rJK0...",
//       "email": "user@example.com",
//       "emailVerified": false,
//       "displayName": "John Doe",
//       "providerUserInfo": [
//         {
//           "providerId": "password",
//           "displayName": "John Doe",
//           "photoUrl": "http://localhost:8080/img1234567890/photo.png",
//           "federatedId": "user@example.com",
//           "email": "user@example.com",
//           "rawId": "user@example.com",
//           "screenName": "user@example.com"
//         }
//       ],
//       "photoUrl": "https://lh5.googleusercontent.com/.../photo.jpg",
//       "passwordHash": "...",
//       "passwordUpdatedAt": 1.484124177E12,
//       "validSince": "1484124177",
//       "disabled": false,
//       "lastLoginAt": "1484628946000",
//       "createdAt": "1484124142000",
//       "customAuth": false
//     }
//   ]
// }
