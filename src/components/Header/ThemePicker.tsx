import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, Collapse } from '@material-ui/core'
import ThemeList from '../ThemeList'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    theme: {
      position: 'relative',
      '& .theme-collapse': {
        position: 'absolute',
        'z-index': 999,
        right: 0,
        background: theme.palette.common.white,
        boxShadow: `1px 1px 3px 0px ${theme.palette.grey[500]}`,
      },
    },
  })
)

export default function ThemePicker() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Box
      className={classes.theme}
      onKeyDown={(e) => handleClick()}
      onClick={(e) => handleClick()}
    >
      Theme
      <Collapse
        className={'theme-collapse'}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <ThemeList />
      </Collapse>
    </Box>
  )
}
