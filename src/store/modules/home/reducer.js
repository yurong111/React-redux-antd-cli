import createReducer from '../../../utils/createReducer'
import types from './types'

const initialState = {
  list: null,
}

export default createReducer(initialState, {
  [`${types.ADD}_PENDING`]: (state, action) => {
    return Object.assign({}, state, {
      list: [],
    })
  },
  [`${types.ADD}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, {
      list: action.payload.data,
    })
  },
})
