import request from '@/utils/request'

const defaultSettings = require('../settings.js')

const apiPrefix = defaultSettings.getApiPrefix()

export function getList(params) {
  return request({
    url: `/${apiPrefix}/table/list`,
    method: 'get',
    params
  })
}
