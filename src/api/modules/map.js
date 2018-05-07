import request from '../request'
import comfig from '../api'
// 获取图库列表
export function search (params) {
  return request({
    url: comfig.search,
    method: 'post',
    params: params
  })
}

// 获取图库详情
export function detail (params) {
  return request({
    url: comfig.detail,
    method: 'post',
    params: params,
  })
}

