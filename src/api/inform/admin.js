import request from '@/utils/fetch'

/**
 * 分页获取通知
 * @param {Number} page
 * @param {Number} [size = 6]
 * @return {Promise}
 */
export function fetchInformByPage(page, size = 6) {
  return request({
    url: `test/inform/page`,
    method: 'GET',
    params: {
      page,
      size
    }
  })
}
