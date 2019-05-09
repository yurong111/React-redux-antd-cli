import createReducer from '../../../libs/createReducer'
import types from './types'
import * as utils from '../../../utils'

const initialState = {
  articleObject: undefined,
}

export default createReducer(initialState, {
  [`${types.LIST}_PENDING`]: (state, action) => {
    return Object.assign({}, state, {
      articleObject: undefined,
    })
  },
  [`${types.LIST}_SUCCESS`]: (state, action) => {
    return Object.assign({}, state, {
      articleObject: {
        ...action.payload.data,
        pagination: utils.parsePagination(action.payload.data.meta),
      },
    })
  },
})
