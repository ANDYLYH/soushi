import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,//跨域
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['token'] = Vue.cookie.get('token')//添加token 用于判断此用户是否处于登录状态，或登录状态是否还有效
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  // if (response.data && response.data.code === 401) { // 401, token失效
  //   Vue.cookie.delete('token')
  //   router.push({ name: 'login' })
  // }
  return response
}, error => {
  return Promise.reject(error)
})

export default service
