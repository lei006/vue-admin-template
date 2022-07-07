import request from '@/utils/request'

const defaultSettings = require('../settings.js')

const apiPrefix = defaultSettings.getApiPrefix()

export function login(data) {
  return request({
    url: `/${apiPrefix}/user/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: `/${apiPrefix}/user/info`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `/${apiPrefix}/user/logout`,
    method: 'post'
  })
}
