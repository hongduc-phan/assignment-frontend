import {
  CatType,
  SEARCHCATS,
  FETCH_CAT,
  FETCH_CAT_FAIL,
  FETCH_CAT_SUCCESS,
  FetchCatFailAction,
  SagaFetchCatAction,
  SagaFetchCatSuccessAction,
} from '../../types'

// redux-thunk
// export const fetchCat = (keyword: string | undefined = undefined) => async (
//   dispatch: Dispatch
// ) => {
//   let cats: CatType[]
//   try {
//     if (keyword && keyword !== '') {
//       cats = await catApi.getByName(keyword)
//     } else {
//       cats = await catApi.getAll()
//     }
//     dispatch({
//       type: FETCH_CAT,
//       payload: cats,
//     })
//   } catch (e) {
//     dispatch({
//       type: FETCH_CAT_FAIL,
//     })
//   }
// }

export const searchCats = (
  cats: CatType[] | null
) => {
  return {
    type: SEARCHCATS,
    payload: cats,
  }
}

export const fetchCat = (
  keyword: string | undefined = undefined
): SagaFetchCatAction => {
  return {
    type: FETCH_CAT,
    payload: keyword,
  }
}

export const fetchCatSuccess = (
  cats: CatType[]
): SagaFetchCatSuccessAction => {
  return {
    type: FETCH_CAT_SUCCESS,
    payload: cats,
  }
}

export const fetchCatFail = (): FetchCatFailAction => {
  return {
    type: FETCH_CAT_FAIL,
  }
}
