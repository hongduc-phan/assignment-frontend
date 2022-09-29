import React, { useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import _ from 'lodash'

import { fetchCat } from '../redux/actions/cat'
import { AppState, CatType } from '../types'
import Cat from '../components/Cat'

const CatDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  // const [cat, setCat] = useState<CatType | null>(null)
  // const [borderCountries, setBorderCountries] = useState<CatType[] | null>(
  //   null
  // )

  const catObjectInCart = useSelector<
    AppState,
    { [id: string]: CatType }
  >(({ cart }) => {
    return { ...cart.cats }
  })

  const cats: CatType[] = useSelector<AppState, CatType[]>(({ cat }) => {
    return _.cloneDeep(Object.values(cat))
  })

  useEffect(() => {
    if (!cats?.length && !!id?.length) {
      dispatch(fetchCat())
    }
  }, [dispatch])

  const cat: CatType | null= useMemo(() => {
    return (!!cats?.length && cats?.filter(c => {
      return c?.id === id
    })[0]) || null
  }, [cats, id])

  if (cat) {
    return (
      <Container fluid>
        <Cat catObjectInCart={catObjectInCart} cat={cat} />
      </Container>
    )
  } else {
    return null
  }
}

export default CatDetail
