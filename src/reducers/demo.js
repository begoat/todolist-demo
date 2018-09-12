const initialState = {
  entityList: [{
    createTime: 'now',
    status: 0, // status: 0(active), 1(complete), 2(deleted)
    title: '任务1',
  }, {
    createTime: 'now',
    status: 2, // status: 0(active), 1(complete), 2(deleted)
    title: '任务2',
  }, {
    createTime: 'now',
    status: 1, // status: 0(active), 1(complete), 2(deleted)
    title: '任务3',
  }],
};

export const demo = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ENTITY_STATUS':
      return {
        ...state, 
        entityList: state.entityList.map((el, index) => {
          if (index === action.index) {
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
