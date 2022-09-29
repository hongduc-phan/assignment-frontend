import React, { FC, useEffect, useState } from 'react'
import { CatType } from '../../types'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { captialize } from '../../helpers/common'
import CardImage from '../common/Card/CardImage'
import CartButtonGroup from '../CartButtonGroup'

type Props = {
  cat: CatType
  catObjectInCart: { [char: string]: CatType }
}
const Cat: FC<Props> = ({ cat, catObjectInCart }) => {
  const [orderAmount, setOrderAmount] = useState<number | undefined>(undefined)
  const showFields = [
    'origin',
    'life_span',
    'temperament',
    'description'
  ]

  useEffect(() => {
    if (catObjectInCart[cat.id]) {
      setOrderAmount(catObjectInCart[cat.id].orderAmount)
    } else {
      setOrderAmount(undefined)
    }
  }, [cat?.id, catObjectInCart])

  return (
    <Container className="mt-5">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <CardImage>
            <img src={cat.image?.url} alt={`${cat.name}'s flaga`} />
          </CardImage>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h1" component="h2">
            {cat.name}
          </Typography>
          {showFields.map((field) => (
            <Typography key={field} variant="body2" gutterBottom>
              {captialize(field)}: {cat[field as keyof CatType]}
            </Typography>
          ))}
          <Box mt={3}>
            <CartButtonGroup
              cat={cat}
              orderAmount={orderAmount}
              size="large"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cat
