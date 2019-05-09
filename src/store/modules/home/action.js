import types from './types'
import io from '../../../io/'

export function getBanner(params) {
  return {
    type: types.LIST,
    payload: {
      promise: io.getBanner(params),
    },
  }
}
