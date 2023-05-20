const initialState = {
    token: localStorage.getItem('token') || '',
    error: '',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload, error: '' };
      case 'LOGIN_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
  