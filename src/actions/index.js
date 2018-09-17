import { timeoutWrapper } from '../utils/index';

// auth related
export const setLoginStatus = (status) => {
  return {
    status,
    type: 'SET_LOGIN_STATUS'
  };
};

export const setRedirectToReferrer = (bool) => {
  return {
    bool,
    type: 'SET_REDIRECT_TO_REFERRER'
  };
};

export const verifyToken = () => {
  return (dispatch) => {
    timeoutWrapper(5000, fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}`, { method: 'POST' }))
      .then((res) => res.json())
      .then((data) => {
        if (data.hello === 'world') {
          dispatch(setLoginStatus(1));
        } else {
          dispatch(setLoginStatus(2));
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(setLoginStatus(2));
      });
  };
};

export const requestLogin = () => {
  return (dispatch) => {
    timeoutWrapper(5000, fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}`, { method: 'POST' }))
      .then((res) => res.json())
      .then((data) => {
        if (data.hello === 'world') {
          dispatch(setLoginStatus(1));
          dispatch(setRedirectToReferrer(true));
        } else {
          dispatch(setLoginStatus(2));
        }
      })     
      .catch((e) => {
        console.log(e);
        dispatch(setLoginStatus(2));
      });
  };
};

// main app related
export const changeEntityStatus = (id, status) => {
  return {
    id,
    status,
    type: 'CHANGE_ENTITY_STATUS'
  };
};

export const changeQueryStr = (value) => {
  return {
    value,
    type: 'CHANGE_QUERY_STR'
  };
};

export const changeShowStatus = (targetAttribute, value) => {
  return {
    targetAttribute,
    value,
    type: 'CHANGE_SHOW_STATUS'
  };
};

export const addNewEntity = (title) => {
  return {
    title,
    type: 'ADD_NEW_ENTITY'
  };
};

export const changeEntityInfo = (id, title, status, createTime) => {
  return {
    id,
    title,
    status,
    createTime,
    type: 'CHANGE_ENTITY_INFO'
  }
}

export const clearAll = () => {
  return {
    type: 'CLEAR_ALL'
  };
};
