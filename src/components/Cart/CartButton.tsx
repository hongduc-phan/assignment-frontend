import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, CatType } from '../../types'
import { Box, IconButton, Badge } from '@material-ui/core'
import {
  Theme,
  withStyles,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { toggleDrawer } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonIcon: {
      color: theme.palette.primary.contrastText,
    },
  })
)

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  })
)(Badge)

const CartButton = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [noOfCat, setNoOfCat] = useState<number>(0)
  const [isShow, toggle] = useState<boolean>(false)
  const catsInCart = useSelector<AppState, CatType[]>(({ cart }) => {
    return [...Object.values(cart.cats)]
  })

  const toggleLeftDrawer = () => {
    if (isShow) {
      dispatch(toggleDrawer({ anchor: 'right', open: true }))
    }
  }

  useEffect(() => {
    setNoOfCat(catsInCart.length)
    if (catsInCart.length === 0) {
      toggle(false) // isShow off
    } else {
      toggle(true)
    }
  }, [catsInCart])
  return (
    <Box className="cart--button--wrap">
      <IconButton
        className={classes.buttonIcon}
        onClick={toggleLeftDrawer}
        aria-label="cart"
      >
        <StyledBadge badgeContent={noOfCat} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Box>
  )
}

export default CartButton
