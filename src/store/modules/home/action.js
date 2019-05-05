import types from './types'
import io from '../../../io/'

export function getBanner() {
  return {
    type: types.ADD,
    payload: {
      promise: io.getBanner(),
    },
  }
}
