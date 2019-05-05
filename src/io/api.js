import axios from 'axios'
const Axios = axios.create({
  withCredentials: true,
})

const fetcher = method => (url, data, userConfig) => {
  let res = null
  let config = {
    method,
    url,
    ...userConfig,
  }
  switch (method) {
    case 'GET':
      config.params = data
      res = Axios.get(url, config)
      break
    case 'POST':
      res = Axios.post(url, data, config)
      break
    case 'PUT':
      res = Axios.put(url, data, config)
      break
    case 'PATCH':
      res = Axios.patch(url, data, config)
      break
    case 'DELETE':
      res = Axios.delete(url, config)
      break

    default:
      break
  }

  return res
}

export default {
  get: fetcher('GET'),
  post: fetcher('POST'),
  put: fetcher('PUT'),
  patch: fetcher('PATCH'),
  delete: fetcher('DELETE'),
}
