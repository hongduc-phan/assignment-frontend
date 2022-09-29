import React, { useEffect, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import _ from 'lodash'

import {
  Paper,
  TableContainer,
  Table,
  CircularProgress,
} from '@material-ui/core'
import { AppState, CatType } from '../../types'
import { sortObjInArr } from '../../helpers/common'
import { fetchCat } from '../../redux/actions/cat'
import useDeepEffect from '../../Hooks/useDeepEffect'

import CatListHeader from './CatListHeader'
import CatListItem from './CatListItem'
import { makeStyles } from '@material-ui/core/styles'
import useLazyLoading from '../../Hooks/useLazyLoading'

const useStyle = makeStyles({
  root: {
    position: 'relative',
  },
  loadingWrap: {
    position: 'absolute',
    textAlign: 'center',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#cccccc8a',
    paddingTop: '10%',
    // transform: 'translateX(-50%)'
  },
  centerText: {
    textAlign: 'center',
  },
})

type Props = {
  // cats: CatType[]
}
const CatList: FC<Props> = () => {
  const showFields = ['Picture', 'name', 'life span', 'Description', 'region', null]
  const showFieldWidths = ['10%', '20%', '20%', '20%', '20%', '10%']

  const dispatch = useDispatch()

  const catObjectInCart = useSelector<
    AppState,
    { [id: string]: CatType }
  >(({ cart }) => {
    return { ...cart.cats }
  })

  
  const fetchCatsStatus = useSelector<AppState, boolean | null>(
    ({ fetchStatus }) => fetchStatus.fetchCats
  )

  const cats = useSelector<AppState, CatType[]>(({ cat }) => {
    return _.cloneDeep(Object.values(cat))
  })

  const [displayCats, setDisplayCats] = useState<
    CatType[] | null
  >(cats)

  const classes = useStyle()

  const displayCatsLazyLoad = useLazyLoading<CatType>(
    displayCats,
    10
  )

  useEffect(() => {
    dispatch(fetchCat())
  }, [dispatch])

  useDeepEffect(() => {
    setDisplayCats(cats)
  }, [cats])

  // end detect scroll bottom
  const buildList = (): React.ReactNode | null => {
    if (displayCatsLazyLoad) {
      return displayCatsLazyLoad.map((cat) => {
        const catIdInCart = cat?.id
        let orderAmount = catObjectInCart[catIdInCart]?.orderAmount
        return (
          <CatListItem
            key={cat?.id}
            orderAmount={orderAmount}
            cat={cat}
          />
        )
      })
    }
    return null
  }

  const sortHandler = (title: string, isAsc: boolean) => {
    const clonedCats = sortObjInArr(displayCats, title, isAsc)
    setDisplayCats(clonedCats)
  }

  return (
    <TableContainer className={classes.root} component={Paper}>
      {fetchCatsStatus === null && (
        <div className={classes.loadingWrap}>
          <CircularProgress />
        </div>
      )}
      <Table aria-label="simple table">
        <CatListHeader
          titles={showFields}
          colWidths={showFieldWidths}
          onSort={sortHandler}
          sort={[false, true, false]}
        />

        {displayCatsLazyLoad && displayCatsLazyLoad.length > 0 && (
          <tbody>{buildList()}</tbody>
        )}
      </Table>

      {fetchCatsStatus === false && (
        <div className={classes.centerText}>
          <p>There is no items</p>
        </div>
      )}
    </TableContainer>
  )
}

export default CatList
