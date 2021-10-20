import axios from 'axios'

const localURL = process.env.VUE_APP_URL;

export function requestLocal (config) {
  var at = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: localURL,//接口地址
    timeout: 15000,
    headers: { 'at': at ? at.replace(/\"/g, "") : "" }
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  });
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    let code = err.response.status;
    if (code === 401) {
      alert("登录信息已失效，请您重新登录！");
    }
  });
  return instance(config);
}
