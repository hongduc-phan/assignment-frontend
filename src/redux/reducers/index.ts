import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import cart from './cart'
import cat from './cat'
import fetchStatus from './fetchStatus'
import { DEBUG_MODE } from '../store'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    cart,
    cat,
    fetchStatus,
    debug: (t) => DEBUG_MODE,
  })

export default createRootReducer
