import api from './api'
import url from './url'

export const getBanner = params => {
  let defaultParams = {}
  return api.get(url.GET_BANNER, {
    ...defaultParams,
    ...params,
  })
}
