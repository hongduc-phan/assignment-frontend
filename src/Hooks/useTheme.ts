import { useContext, useEffect, useState } from 'react'
import { Palette, ThemeContextType } from '../types'
import ThemeContext from '../Context/ThemeContext'
import Theme from '../Theme'

const useTheme = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext)
  const [themeColor, setThemeColor] = useState<Palette>(Theme[theme])
  const [mainColors, setMainColors] = useState<string[]>([])

  useEffect(() => {
    setThemeColor(Theme[theme])
    let mainColors = Object.values(Theme).map((palette) => palette.primary)
    setMainColors(mainColors)
  }, [theme])

  return { themeColor, mainColors, setTheme }
}

export default useTheme
