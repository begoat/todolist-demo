const initialState = {
  queryStr: '',
  showActive: true,
  showComplete: true,
  showDeleted: true,
};

export const system = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUERY_STR':
      return {...state, queryStr: action.value};
    case 'CHANGE_SHOW_STATUS':
      return {...state, [action.targetAttribute]: action.value};
    default:
      return state;
  }
};

export default system;
