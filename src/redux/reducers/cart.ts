import {
  ADD_ITEM_TO_CART,
  CartActions,
  CartState,
  DECREASE_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
} from '../../types'

const initialValue: CartState = {
  cats: {},
}

export default function cart(
  state: CartState = initialValue,
  action: CartActions
): CartState {
  switch (action.type) {
  case ADD_ITEM_TO_CART: {
    let cat = action.payload
    let catId = cat.id
    let amount = 0
    if (state.cats[catId]) {
      amount = state.cats[catId].orderAmount
    }
    amount += 1
    return {
      ...state,
      cats: {
        ...state.cats,
        [catId]: { ...cat, orderAmount: amount },
      },
    }
  }
  case DECREASE_ITEM_TO_CART: {
    let cat = action.payload
    let catId = cat.id
    let amount = 0
    if (state.cats[catId]) {
      amount = state.cats[catId].orderAmount
      amount -= 1
      return {
        ...state,
        cats: {
          ...state.cats,
          [catId]: { ...cat, orderAmount: amount },
        },
      }
    } else {
      return { ...state }
    }
  }
  case REMOVE_ITEM_TO_CART: {
    let catId = action.payload
    let clonedCats = { ...state.cats }
    delete clonedCats[catId]
    return { ...state, cats: { ...clonedCats } }
  }
  default: {
    return state
  }
  }
}
