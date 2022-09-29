import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
// import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import logMiddleware from './middlewares/log'

export const DEBUG_MODE = false

const initState: AppState = {
  product: {
    inCart: [],
  },
  ui: {
    dialogOpen: {},
    drawer: {
      left: false,
      right: false,
      top: false,
      bottom: false,
    },
  },
  cart: {
    cats: {},
  },
  fetchStatus: {
    fetchCats: null,
  },
  cat: {},
  debug: DEBUG_MODE,
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [
    logMiddleware,
    sagaMiddleware,
    // thunk
  ]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
