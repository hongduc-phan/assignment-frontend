import React, { FC, useState } from 'react'
import { captialize } from '../../helpers/common'
import { TableCell, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  title: string | null
  colWidth: number | string
  onSort?: (title: string, isAsc: boolean) => void
  isSort?: boolean
}

type StyleProps = {
  colWidth: number | string
}

const useStyles = makeStyles({
  item: {
    width: (props: StyleProps) => props.colWidth,
  },
})

const CatListHeaderItem: FC<Props> = ({
  title,
  colWidth,
  onSort,
  isSort = false,
}) => {
  const classes = useStyles({ colWidth: colWidth })
  const [isAsc, setIsAsc] = useState<boolean>(true)
  const toggleSort = () => {
    if (onSort && typeof title === 'string') {
      onSort(title, !isAsc)
      setIsAsc(!isAsc)
    }
  }

  if (isSort) {
    return (
      <TableCell className={classes.item}>
        {captialize(title)}
        <IconButton onClick={toggleSort} style={{ marginLeft: 3 }}>
          {isAsc ? (
            <i className="fas fa-arrow-up" />
          ) : (
            <i className="fas fa-arrow-down" />
          )}
        </IconButton>
      </TableCell>
    )
  }

  return <TableCell className={classes.item}>{captialize(title)}</TableCell>
}

export default CatListHeaderItem
