import api from './api'
import url from './url'

export const getBanner = params => {
  let defaultParams = {
    post_id__in: '',
  }
  return api.get(url.GET_BANNER, {
    ...defaultParams,
    ...params,
  })
}
