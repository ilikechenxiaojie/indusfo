import request from '@/utils/fetch'

/**
 * 获取所有申请表情况(status -1 0 1)
 * @param {Number} status
 * @param {Number} page
 * @param {Number} [size = 6]
 * @return {Promise}
 */
export function fetchSelfStatus(status, page, size = 6) {
  return request({
    url: '/test/inform/self',
    method: 'GET',
    params: {
      page,
      size,
      status
    }
  })
}
/**
 * 获取所有申请表情况(status -1 0 1)
 * @param {Number} page
 * @param {Number} [size = 6]
 * @return {Promise}
 */
export function fetchSelfAllStatus(page, size = 6) {
  return request({
    url: '/test/inform/self',
    method: 'GET',
    params: {
      page,
      size
    }
  })
}
