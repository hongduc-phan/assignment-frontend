import React from 'react'
import './App.scss'
import Routes from './Routes'
import Header from './components/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import themeCollection from './MuiTheme'
import useMuiTheme from './Hooks/useMuiTheme'
import LeftDrawer from './components/AppDrawer/LeftDrawer'
import RightDrawer from './components/AppDrawer/RightDrawer'
import Footer from 'components/Footer'
export default function App() {
  const { themeMuiObject } = useMuiTheme()
  return (
    <ThemeProvider theme={themeMuiObject || themeCollection.red}>
      <Header />
      <LeftDrawer />
      <RightDrawer />
      <Routes />
      <Footer/>
    </ThemeProvider>
  )
}
