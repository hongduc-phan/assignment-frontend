import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { makeStyles } from '@material-ui/core/styles'
import { CatType } from '../../types'
import { addItemTCart, decreaseItemTCart } from '../../redux/actions/cart'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    'min-width': '40px',
    '&:focus': {
      outline: 'none',
    },
  },
  number: {
    margin: 0,
    padding: '0 15px',
  },
})
type Props = {
  cat: CatType
  orderAmount?: number
  size?: 'small' | 'medium' | 'large'
}
const CartButtonGroup: FC<Props> = ({
  cat,
  orderAmount,
  size = 'small',
}) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const addToCart = () => {
    dispatch(addItemTCart(cat))
  }
  const decreaseToCart = () => {
    dispatch(decreaseItemTCart(cat, orderAmount))
  }

  if (orderAmount) {
    return (
      <div className={classes.root}>
        <Button
          onClick={addToCart}
          className={classes.button}
          size={size}
          color="primary"
          variant="contained"
        >
          <AddIcon />
        </Button>
        <p className={classes.number}>{orderAmount}</p>
        <Button
          onClick={decreaseToCart}
          className={classes.button}
          size={size}
          color="primary"
          variant="contained"
        >
          <RemoveIcon />
        </Button>
      </div>
    )
  } else {
    return (
      <Button
        onClick={addToCart}
        size={size}
        variant={'contained'}
        color="primary"
      >
        Add
      </Button>
    )
  }
}

export default CartButtonGroup
