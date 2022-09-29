import React, { useState } from 'react'
import ThemeContext from './Context/ThemeContext'
import { ThemeLabel } from './types'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeLabel>('red')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
