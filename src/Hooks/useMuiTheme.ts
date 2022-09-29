import { useContext, useEffect, useState } from 'react'
import { ThemeContextType } from '../types'
import ThemeContext from '../Context/ThemeContext'
import { Theme as AugmentedTheme } from '@material-ui/core'
import themeCollection from '../MuiTheme'

const useMuiTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext)
  const [themeMuiObject, setThemeMuiObject] = useState<AugmentedTheme>(
    themeCollection[theme]
  )
  useEffect(() => {
    setThemeMuiObject(themeCollection[theme])
  }, [theme])

  return { themeMuiObject, setTheme }
}

export default useMuiTheme
