import React, { FC } from 'react'
import { addItemTCart } from '../../redux/actions/cart'
import { useDispatch } from 'react-redux'
import { CatType } from '../../types'
import { Button } from '@material-ui/core'

type Props = {
  cat: CatType
  hasAdded?: boolean
}
const AddButton: FC<Props> = ({ cat, hasAdded = false }) => {
  const dispatch = useDispatch()
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(addItemTCart(cat))
  }
  return (
    <Button
      variant={'contained'}
      color={'primary'}
      disabled={hasAdded}
      onClick={addToCart}
    >
      {hasAdded ? 'Added' : 'Add'}
    </Button>
  )
}

export default AddButton
