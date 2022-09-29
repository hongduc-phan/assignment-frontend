import React, { FC } from 'react'
import CatListHeaderItem from './CatListHeaderItem'
import { TableHead, TableRow } from '@material-ui/core'

type Props = {
  titles: (string | null)[]
  colWidths: (number | string)[]
  sort?: boolean[]
  onSort?: (title: string, isAsc: boolean) => void
}
const CatListHeader: FC<Props> = ({
  titles,
  colWidths,
  sort = [],
  onSort,
}) => {
  const buildTd = () => {
    return titles.map((title, key) => {
      let isSort = false
      if (sort[key] && onSort) {
        isSort = true
      }
      return (
        <CatListHeaderItem
          key={key}
          title={title}
          isSort={isSort}
          onSort={onSort}
          colWidth={colWidths[key]}
        />
      )
    })
  }

  return (
    <TableHead>
      <TableRow>{buildTd()}</TableRow>
    </TableHead>
  )
}

export default CatListHeader
