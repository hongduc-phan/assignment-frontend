import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'

// this is the boilerplate of creating middleware
// const someMiddleware = ({dispatch, getState}: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
//     next(action);
// }

const logMiddleware = ({ dispatch, getState }: MiddlewareAPI) => (
  next: Dispatch
) => (action: AnyAction) => {
  if (getState().debug) {
    console.log(`=========Action: ${action.type}===========`)
    let result = next(action)
    console.log('LOG RESULT', result)
    console.log(`=========End Action: ${action.type}===========\n\n\n\n`)
    return null
  } else {
    next(action)
  }
}
export default logMiddleware
