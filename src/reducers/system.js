const initialState = {
  queryStr: '',
  showStatus: 7, // linux filesystem like status 4 2 1 active/complete/deleted
};

export const system = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUERY_STR':
      return {...state, queryStr: action.value}
    case 'CHANGE_SHOW_STATUS':
      return {...state, showStatus: action.value}
    default:
      return state;
  }
};

export default system;
