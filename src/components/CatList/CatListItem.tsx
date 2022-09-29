import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { CatType } from '../../types'
import CardImage from '../common/Card/CardImage'
import { TableRow, TableCell } from '@material-ui/core'
import CartButtonGroup from '../CartButtonGroup'

type Props = {
  cat: CatType
  orderAmount?: number
}

const CatListItem: FC<Props> = React.memo(({ cat, orderAmount }) => {
  return (
    <TableRow>
      <TableCell>
        <CardImage>
          <img src={cat?.image?.url} alt={`${cat.wikipedia_url}'s Flag`} />
        </CardImage>
      </TableCell>
      <TableCell>
        <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
      </TableCell>
      <TableCell>{`${cat.life_span} years`}</TableCell>
      <TableCell>{cat.description}</TableCell>
      <TableCell>{cat.origin}</TableCell>
      <TableCell>
        <CartButtonGroup
          cat={cat}
          orderAmount={orderAmount}
          size="medium"
        />
      </TableCell>
    </TableRow>
  )
})

export default CatListItem
