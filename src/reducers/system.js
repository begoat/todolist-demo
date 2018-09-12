const initialState = {
  queryStr: '',
  // showStatus: 7, // linux filesystem like status 4 2 1 active/complete/deleted
  showActive: true,
  showComplete: true,
  showDeleted: true,
};

export const system = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUERY_STR':
      return {...state, queryStr: action.value}
    case 'CHANGE_SHOW_STATUS':
      return {...state, [action.target]: action.value}
    default:
      return state;
  }
};

export default system;
