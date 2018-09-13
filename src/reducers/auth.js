const initialState = {
  /* 
    0 loading
    1 authed
    2 not authed
  */
  isAuthenticated: 0,
  // for redirect to origin location
  redirectToReferrer: false
};

export const auth = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_STATUS':
      if (state.isAuthenticated !== action.status) {
        return {...state, isAuthenticated: action.status};
      }

      return state;
    case 'SET_REDIRECT_TO_REFERRER':
      return {...state, redirectToReferrer: action.bool};
    default:
      return state;
  }
};

export default auth;
