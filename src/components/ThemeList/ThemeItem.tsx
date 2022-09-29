import { themeColorCollection } from '../../MuiTheme'
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt'
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeLabel } from '../../types'

type StyleProps = {
  colorName: ThemeLabel
}

const useStyles = makeStyles({
  icon: {
    color: (props: StyleProps) => themeColorCollection[props.colorName],
  },
})

type Props = {
  colorName: ThemeLabel
}
const ThemePickerItem: FC<Props> = ({ colorName }) => {
  const classes = useStyles({ colorName: colorName })
  return <ViewQuiltIcon className={classes.icon} />
}
export default ThemePickerItem
