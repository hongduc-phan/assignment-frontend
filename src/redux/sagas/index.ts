import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import catSagas from './cat'

export default function* rootSaga() {
  yield all([...productSagas, ...uiSagas, ...catSagas])
}
