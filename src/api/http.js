import Fly from 'flyio/dist/npm/wx';
import store from '../store/index;'
import qs from 'qs';

const http = new Fly();

http.config.baseURL = store.state.baseUrl;
http.config.timeout = 10000;
http.config.parseJson = false;
http.config.withCredentials = true;

// 请求拦截器
http.interceptors.request.use((request) => {
  // 设置请求头
  request.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

  let params = request.body;
  params['token'] = store.state.token || undefined;
  request.body = qs.stringify(params);

  return request;
});

// 响应拦截器
http.interceptors.response.use(
  (response, promise) => {
    let data = response.data;
    switch (Number(data.rspCode)) {
      case 1: //错误提示
        return promise.reject(response);
      case 80001: //未登录
        return promise.reject(data);
      case 0: //正常返回
        return promise.resolve(data);
      default:
        return promise.resolve(data);
    }
  }, (err, promise) => {
    return promise.resolve();
  }
);

export default http;
