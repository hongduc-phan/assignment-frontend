import { takeLatest, select } from 'redux-saga/effects'

import { ADD_PRODUCT, AddProductAction } from '../../types'

function* doSomethingWhenAddingProduct(action: AddProductAction) {
  console.log('state', yield select((state) => state))
  yield console.log(action)
}

export default [takeLatest(ADD_PRODUCT, doSomethingWhenAddingProduct)]
