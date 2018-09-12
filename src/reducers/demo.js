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
    default:
      return state;
  }
};

export default demo;
