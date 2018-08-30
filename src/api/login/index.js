import request from '@/utils/fetch'

/**
 * 登录
 * @param {JSON} data
 * @param {String} data.username
 * @param {String} data.password
 * @return {Promise}
 */
export function login(data) {
  return request.post('/test/inform/login', data)
}
