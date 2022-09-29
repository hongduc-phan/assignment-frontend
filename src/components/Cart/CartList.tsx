import React, { FC } from 'react'
import { CatType } from '../../types'
import { useDispatch } from 'react-redux'
import { removeItemTCart } from '../../redux/actions/cart'
import { Link } from 'react-router-dom'
import useTheme from '../../Hooks/useTheme'
import {
  Grid,
  ListItem,
  List,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

type Props = {
  list: CatType[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 752,
      width: 300,
      padding: '10px',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
      width: 60,
      marginRight: '20px',
    },
    amount: {
      color: `${theme.palette.common.black}`,
    },
  })
)

const CartList: FC<Props> = ({ list }) => {
  const classes = useStyles()
  const { themeColor } = useTheme()
  const dispatch = useDispatch()
  const removeCatFromCart = (cat: CatType) => {
    dispatch(removeItemTCart(cat))
  }
  const buildList = () => {
    if (list) {
      return list.map((cat) => (
        <ListItem key={cat.id}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              variant={'rounded'}
              src={cat.image?.url}
              alt={`${cat.name}'s Flag`}
            />
          </ListItemAvatar>
          <ListItemText>
            <Link
              style={{ color: themeColor.primary }}
              className="cart--item--title"
              to={`/cats/${cat.id}`}
            >
              {cat.name}
            </Link>
          </ListItemText>
          <ListItemText className={classes.amount}>
            X {cat.orderAmount}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={() => removeCatFromCart(cat)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    }
    return null
  }
  return (
    <Grid className={classes.root} item xs={12} md={6}>
      <Grid item className={classes.demo}>
        <List>{buildList()}</List>
      </Grid>
    </Grid>
  )
}

export default CartList
