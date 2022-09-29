import {
  CatState,
  FETCH_CAT_FAIL,
  FETCH_CAT_SUCCESS,
  SagaCatActions,
} from '../../types'

const initialValue: CatState = {}

export default function cat(
  state: CatState = initialValue,
  action: SagaCatActions
): CatState {
  switch (action.type) {
  case FETCH_CAT_SUCCESS: {
    // convert cat array to object with key is unique alpha2Code stirng
    let catObjs = action.payload.reduce<{ [c: string]: any }>(
      (acc, cat) => {
        acc[cat.id] = cat
        return acc
      },
      {}
    )
    return { ...catObjs }
  }
  case FETCH_CAT_FAIL: {
    return { ...state }
  }
  default: {
    return { ...state }
  }
  }
}
