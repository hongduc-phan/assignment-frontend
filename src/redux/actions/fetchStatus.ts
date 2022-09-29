import {
  RESET_FETCH_CATS,
  ResetFetchCatStatusAction,
} from '../../types'

export function resetFetchCatStatus(): ResetFetchCatStatusAction {
  return {
    type: RESET_FETCH_CATS,
  }
}
