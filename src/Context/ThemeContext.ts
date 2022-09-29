import { createContext } from 'react'
import { ThemeContextType } from '../types'

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export default ThemeContext
