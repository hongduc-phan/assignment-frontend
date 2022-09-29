import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, CatType } from '../../types'
import { toggleDrawer } from '../../redux/actions'
import CartList from '../Cart/CartList'

const RightDrawer: FC = () => {
  const dispatch = useDispatch()
  const open = useSelector<AppState, boolean>(({ ui }) => ui.drawer.right)
  const onClose = () => dispatch(toggleDrawer({ anchor: 'right', open: false }))
  const catsInCart = useSelector<AppState, CatType[]>(({ cart }) => {
    return [...Object.values(cart.cats)]
  })
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <CartList list={catsInCart} />
    </Drawer>
  )
}

export default RightDrawer
