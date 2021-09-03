import axios from "axios";

const config = {
  baseURL: '/api',
  timeout: 5 * 1000, // 请求超时时间设置
  crossDomain: true,
  // withCredentials: true, // Check cross-site Access-Control
  // 定义可获得的http响应状态码
  validateStatus(status) {
    return status >= 200 && status < 510
  }
}

const server = axios.create(config)

server.interceptors.request.use(config => {
  console.log('config'.config);
  return config
})

server.interceptors.response.use(request => {
  if (request.status === 200) {
    if (request.data && request.data.code === 'success') {
      return request.data
    }
  }
  return Promise.reject()
})

export default server
