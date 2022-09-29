import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer/Drawer'
import ThemeList from '../ThemeList'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import { toggleDrawer } from '../../redux/actions'

const LeftDrawer: FC = () => {
  const dispatch = useDispatch()
  const open = useSelector<AppState, boolean>(({ ui }) => ui.drawer.left)
  const onClose = () => dispatch(toggleDrawer({ anchor: 'left', open: false }))
  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      <ThemeList />
    </Drawer>
  )
}

export default LeftDrawer
