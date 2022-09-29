import { takeEvery, put, call } from 'redux-saga/effects'
import { CatType, FETCH_CAT, SagaFetchCatAction } from '../../types'
import catApi from '../../Api/CatApi'
import { fetchCatFail, fetchCatSuccess } from '../actions/cat'
import { resetFetchCatStatus } from '../actions/fetchStatus'

function* fetchCat(action: SagaFetchCatAction) {
  try {
    yield put(resetFetchCatStatus())
    let allCats: CatType[]
    let cats: CatType[]

    allCats = yield call(catApi.getAll.bind(catApi))
    if (action.payload) {
      cats = yield catApi.getByWords(action.payload,
        allCats)
      allCats = cats
    }

    yield put(fetchCatSuccess(allCats))
  } catch (e) {
    yield put(fetchCatFail())
  }
}

export default [takeEvery(FETCH_CAT, fetchCat)]
