const short = require('short-uuid');
export const translator = short();

export const isServer = typeof window === 'undefined';

export const timeoutWrapper = (ms, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('请求超时5s'));
    },         ms);
    promise.then(resolve, reject);
  });
};

export const titleRegex = new RegExp("^[\\u4e00-\\u9fa5a-zA-Z0-9]{1,30}$");
