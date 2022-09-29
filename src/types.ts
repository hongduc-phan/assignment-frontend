// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DECREASE_ITEM_TO_CART = 'DECREASE_ITEM_TO_CART'
export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART'

export const SEARCHCATS = 'SEARCHCATS'

export const FETCH_CAT = 'FETCH_CAT'
export const FETCH_CAT_FAIL = 'FETCH_CAT_FAIL'
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'

export const RESET_FETCH_CATS = 'RESET_FETCH_CATS'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export type DrawerType = 'left' | 'right' | 'top' | 'bottom'
export type DrawerPayload = {
  anchor: DrawerType
  open: boolean
}
export type ToggleDrawerAction = {
  type: typeof TOGGLE_DRAWER
  payload: DrawerPayload
}
export type DrawerState = {
  [c in DrawerType]: boolean
}
export type FetchStatusState = {
  fetchCats: boolean | null
}
export type FetchStatusAction =
  | FetchCatFailAction
  | SagaFetchCatSuccessAction
  | ResetFetchCatStatusAction

export type AddItemToCartAction = {
  type: typeof ADD_ITEM_TO_CART
  payload: CatType
}

export type DecreaseItemToCartAction = {
  type: typeof DECREASE_ITEM_TO_CART
  payload: CatType
}

export type RemoveItemToCartAction = {
  type: typeof REMOVE_ITEM_TO_CART
  payload: string
}

export type ResetFetchCatStatusAction = {
  type: typeof RESET_FETCH_CATS
}

export type FetchCatAction = {
  type: typeof FETCH_CAT | typeof FETCH_CAT_FAIL
  payload: CatType[]
}

export type SagaFetchCatAction = {
  type: typeof FETCH_CAT
  payload: string | undefined
}

export type SagaFetchCatSuccessAction = {
  type: typeof FETCH_CAT_SUCCESS
  payload: CatType[]
}

export type FetchCatFailAction = {
  type: typeof FETCH_CAT_FAIL
}

export type CartActions =
  | AddItemToCartAction
  | RemoveItemToCartAction
  | DecreaseItemToCartAction

export type CatActions = FetchCatAction | FetchCatFailAction

export type SagaCatActions =
  | FetchCatFailAction
  | SagaFetchCatSuccessAction

export type CartState = { cats: { [code: string]: CatType } }

export type CatState = { [id: string]: CatType }

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction | ToggleDrawerAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
  drawer: DrawerState
}

export type AppState = {
  product: ProductState
  ui: UiState
  cart: CartState
  cat: CatState
  fetchStatus: FetchStatusState
  debug: boolean
}

export type CatType = { orderAmount: number } & {
  adaptability: number,
  affection_level: number, 
  alt_names: string,
  cfa_url: string,
  child_friendly: number,
  description: string,
  dog_friendly: number
  energy_level: number,
  experimental: number,
  grooming: number,
  hairless: number,
  health_issues: number,
  hypoallergenic: number,
  id: string,
  image: any,
  indoor: number
  intelligence: number,
  lap: number,
  life_span: string,
  name: string,
  natural: string,
  origin: string,
  rare: number,
  reference_image_id: string,
  rex: number,
  shedding_level: number,
  short_legs: number,
  social_needs: number,
  stranger_friendly: number,
  suppressed_tail: number,
  temperament: string,
  vcahospitals_url: string,
  vetstreet_url: string,
  vocalisation: string,
  weight: any
  wikipedia_url: string
}
export type ErrorType = {
  response: {
    message?: string
    status: number
  }
}

export type ThemeLabel = 'red' | 'blue' | 'green'
export type MainPalette = {
  primary: string
  secondary: string
  disable: string
}
export type SubPalette = {
  primary_contrast: string
  secondary_contrast: string
  disable_contrast: string
}
export type Palette = MainPalette & SubPalette
export type AppTheme = { [c in ThemeLabel]: Palette }

export type ThemeContextType = {
  theme: ThemeLabel
  setTheme: (c: ThemeLabel) => void
}
