import { TOGGLE_DIALOG, TOGGLE_DRAWER, UiActions, UiState } from '../../types'

const defaultState: UiState = {
  dialogOpen: {},
  drawer: {
    left: false,
    right: false,
    top: false,
    bottom: false,
  },
}

export default function ui(
  state: UiState = defaultState,
  action: UiActions
): UiState {
  switch (action.type) {
  case TOGGLE_DIALOG: {
    return {
      ...state,
      dialogOpen: {
        ...state.dialogOpen,
        [action.payload.dialog]: !state.dialogOpen[action.payload.dialog],
      },
    }
  }

  case TOGGLE_DRAWER: {
    return {
      ...state,
      drawer: {
        ...state.drawer,
        [action.payload.anchor]: action.payload.open,
      },
    }
  }

  default:
    return state
  }
}
