import types from './types'
import axios from 'axios'

export function add(num) {
  return {
    type: types.ADD,
    /* payload: {
      url:
        'https://nei.netease.com/api/apimock/7cd5aa68a267f4216429bd353e46e662/api/v5/wp/banner/',
      method: '',
      param: { num: num },
    }, */

    payload: {
      promise: (() => {
        return axios({
          method: 'get',
          url:
            'https://nei.netease.com/api/apimock/7cd5aa68a267f4216429bd353e46e662/api/v5/wp/banner/',
        })
      })(),
    },
  }
}
