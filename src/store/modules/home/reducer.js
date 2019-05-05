import createReducer from '../../../utils/createReducer'
import types from './types'

const initialState = {
  list: [],
}

export default createReducer(initialState, {
  [`${types.ADD}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, {
      list: action.payload.data,
    })
  },
})
