
const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  const logout = () => ({
    type: 'LOGOUT',
  });
  
  export { loginRequest, loginSuccess, loginFailure, logout };
  