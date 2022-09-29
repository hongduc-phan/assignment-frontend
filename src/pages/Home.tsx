import React from 'react'
import CatList from '../components/CatList'
import SearchBar from '../components/SearchBar'
// import {Container} from 'react-bootstrap'
import { Container } from '@material-ui/core'

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <CatList />
    </Container>
  )
}

export default Home
