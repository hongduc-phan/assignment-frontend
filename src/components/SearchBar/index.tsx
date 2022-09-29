import React, { FC } from 'react'
import useSearch from '../../Hooks/useSearch'
import { Box, TextField } from '@material-ui/core'

type Props = {
  // color?: Color
}

const SearchBar: FC<Props> = () => {
  const { onKeyPress, onTyping } = useSearch()
  return (
    <Box my={3}>
      <TextField
        onKeyPress={onKeyPress}
        onChange={onTyping}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        fullWidth
      />
    </Box>
  )
}

export default SearchBar
