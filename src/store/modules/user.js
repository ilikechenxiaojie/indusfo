import md5 from 'md5'
import types from '../mutation-types'

import {
  login
} from '@/api/login'
import {
  getToken,
  setToken
} from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    [types.SET_TOKEN](state, token) {
      state.token = token
    }
  },
  actions: {
    login({
      commit
    }, {
      username,
      password
    }) {
      return new Promise((resolve, reject) => {
        const md5password = md5(password).toUpperCase()
        login({
          username,
          password: md5password
        }).then(res => {
          const token = res.data
          commit(types.SET_TOKEN, token)
          setToken(token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default user
