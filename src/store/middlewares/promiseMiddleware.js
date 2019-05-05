export default function promiseMiddleware(store) {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action)
    }

    const { type } = action

    next({ type: `${type}_PENDING` })

    action.payload.promise.then(
      res => {
        next({
          type: `${type}_SUCCESS`,
          payload: res,
        })
        return res
      },
      err => {
        next({
          type: `${type}_ERROR`,
          payload: err,
        })
        return err
      }
    )

    return action
  }
}

function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function'
  }
}
