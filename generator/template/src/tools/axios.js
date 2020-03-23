import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let instance = axios.create({
  withCredentials: true
})
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})
instance.interceptors.response.use(response => {
  if (response.status === 200) {
    let data = response.data
    if (data.code === 0) {
      return data.data
    } else {
      data.message = data.codeMsg
      return Promise.reject(data)
    }
  } else {
    return Promise.reject({
      code: -1,
      codeMsg: '网络异常',
      message: '网络异常'
    })
  }
}, ({
  response
}) => {
  let status = response ? response.status : -1
  let message = '网络异常'
  if (status === 404) {
    message = '404 错误'
  } else if (status === 502) {
    message = '服务端异常'
  }
  return Promise.reject({
    code: status,
    codeMsg:message,
    message
  })
})
export default instance
