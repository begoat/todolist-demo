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
      };
      
    case 'CLEAR_ALL':
      return {
        ...state,
        entityList: []
      };

    case 'CHANGE_ENTITY_INFO':
      return {
        ...state,
        entityList: state.entityList.map((el) => {
          if (el.id === action.id) {
            return {...el, status: action.status, createTime: action.createTime, title: action.title};
          }

          return el;
        })
      }

    default:
      return state;
  }
};

export default demo;
