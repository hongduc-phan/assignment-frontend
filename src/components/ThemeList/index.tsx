import React from 'react'
import { List, ListItem, IconButton } from '@material-ui/core'
import useMuiTheme from '../../Hooks/useMuiTheme'
import { themeColorCollection } from '../../MuiTheme'
import ThemePickerItem from './ThemeItem'
import { ThemeLabel } from '../../types'

export default function ThemeList() {
  const { setTheme } = useMuiTheme()

  return (
    <List className={'theme-list'} component="div" disablePadding>
      {Object.keys(themeColorCollection).map((key) => {
        return (
          <ListItem key={key} button>
            <IconButton onClick={(e) => setTheme(key as ThemeLabel)}>
              <ThemePickerItem colorName={key as ThemeLabel} />
            </IconButton>
          </ListItem>
        )
      })}
    </List>
  )
}
