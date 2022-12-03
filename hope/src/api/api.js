import api from './request'
export function LoginApi(data) {
  // 登录
  return api({
    url: 'login',
    method: 'POST',
    data
  })
}
