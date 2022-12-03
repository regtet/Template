import api from "./request";
export function GetList(params) {
  // 用户列表
  return api({
    url: 'orders',
    method: 'GET',
    params
  })
}
export function UpArr(data) {
  // 编辑用户
  return api({
    url: 'orders/' + data.id,
    method: 'PUT',
    data
  })
}

export function Search(data) {
  // 搜索用户
  return api({
    url: 'orders/' + data.id,
    method: 'GET'
  })
}
export function WuLiu(data) {
  // 物流状态
  return api({
    url: 'kuaidi/' + 1106975712662,
    method: 'GET'
  })
}