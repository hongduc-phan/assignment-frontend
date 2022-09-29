import {
  ADD_ITEM_TO_CART,
  AddItemToCartAction,
  CatType,
  DECREASE_ITEM_TO_CART,
  DecreaseItemToCartAction,
  REMOVE_ITEM_TO_CART,
  RemoveItemToCartAction,
} from '../../types'

export function addItemTCart(cat: CatType): AddItemToCartAction {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cat,
  }
}

export function decreaseItemTCart(
  cat: CatType,
  currentAmount: number = 0
): DecreaseItemToCartAction | RemoveItemToCartAction {
  if (currentAmount <= 1) {
    return {
      type: REMOVE_ITEM_TO_CART,
      payload: cat.id,
    }
  } else {
    return {
      type: DECREASE_ITEM_TO_CART,
      payload: cat,
    }
  }
}

export function removeItemTCart(cat: CatType): RemoveItemToCartAction {
  return {
    type: REMOVE_ITEM_TO_CART,
    payload: cat.id,
  }
}
