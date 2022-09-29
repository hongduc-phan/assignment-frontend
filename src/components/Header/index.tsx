import React from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CartButton from '../Cart/CartButton'
import { Link } from 'react-router-dom'
import useMuiTheme from '../../Hooks/useMuiTheme'
import ThemePicker from './ThemePicker'
import themeCollection from '../../MuiTheme'
import { toggleDrawer } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },

      '& .brand': {
        color: theme.palette.primary.contrastText,
      },
    },
  })
)

export default function Header() {
  const dispatch = useDispatch()
  const { themeMuiObject } = useMuiTheme()
  const classes = useStyles()

  const toggleLeftDrawer = () =>
    dispatch(toggleDrawer({ anchor: 'left', open: true }))

  return (
    <ThemeProvider theme={themeMuiObject || themeCollection.red}>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleLeftDrawer}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link className="brand" to="/">
                Cat
              </Link>
            </Typography>
            <div className={classes.grow} />
            <ThemePicker />
            <div>
              <CartButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}
