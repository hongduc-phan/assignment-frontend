import {
  FETCH_CAT_FAIL,
  FETCH_CAT_SUCCESS,
  FetchStatusAction,
  FetchStatusState,
  RESET_FETCH_CATS,
} from '../../types'

const initialValue = {
  fetchCats: null,
}

export default function fetchStatus(
  state: FetchStatusState = initialValue,
  action: FetchStatusAction
): FetchStatusState {
  switch (action.type) {
  case RESET_FETCH_CATS: {
    return { ...state, fetchCats: null }
  }
  case FETCH_CAT_SUCCESS: {
    return { ...state, fetchCats: true }
  }
  case FETCH_CAT_FAIL: {
    return { ...state, fetchCats: false }
  }
  default: {
    return { ...state }
  }
  }
}
