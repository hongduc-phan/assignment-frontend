import { createMuiTheme, Theme } from '@material-ui/core'
import { blue, green, lightBlue, red } from '@material-ui/core/colors'
import { ThemeLabel } from './types'

export const greenTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
})

export const blueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
})

export const redTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
})

export const themeColorCollection: { [k in ThemeLabel]: string } = {
  red: red[500],
  blue: blue[500],
  green: green[500],
}

const themeCollection: { [k in ThemeLabel]: Theme } = {
  red: redTheme,
  blue: blueTheme,
  green: greenTheme,
}

export default themeCollection
