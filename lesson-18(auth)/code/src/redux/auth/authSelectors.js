export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getIdToken = (state) => state.auth.idToken;
export const getEmail = (state) => state.auth.email;
