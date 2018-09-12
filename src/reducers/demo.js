import { translator } from '../utils/index';

const initialState = {
  entityList: [],
};

export const demo = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ENTITY_STATUS':
      return {
        ...state, 
        entityList: state.entityList.map((el) => {
          if (el.id === action.id) {
            return {...el, status: action.status};
          }

          return el;
        })
      };

    case 'ADD_NEW_ENTITY':
      return {
        ...state,
        entityList: [
          ...state.entityList,
          {
            createTime: new Date().toLocaleString(),
            id: translator.new(),
            status: 0, // status: 0(active), 1(complete), 2(deleted)
            title: action.title,
          }
        ]
      }
      
    default:
      return state;
  }
};

export default demo;
