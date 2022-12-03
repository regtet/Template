import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import wod from './env'
const api = axios.create({
  baseURL: wod.prod.baseURL,
  timeout: 10000
})
api.interceptors.request.use(
  (config) => {
    NProgress.start()
    config.headers.Authorization = sessionStorage.getItem('touken')
    store.state.loading = true
    return config
  },
  (error) => new Promise.reject(error)
)

api.interceptors.response.use(
  (res) => {
    store.state.loading = false
    const {
      meta: { msg, status },
      data: result
    } = res.data // 解构赋值拿到msg，状态码和数据
    const state = [200, 201, 204] // 状态码
    if (state.includes(status)) {
      // 如果接口请求成功
      Message({
        message: msg,
        type: 'success'
      })
      if (res.config.url === '/login') {
        // 当前的地址
        sessionStorage.setItem('token', result.token)
      }
      NProgress.done()
      return result
    }
    Message({
      message: msg.message ? '暂无数据' : '' || msg,
      type: 'error'
    })
    console.log(msg, result)
    return Promise.reject(msg.message || msg)
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default api
