import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Items = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={15} id='items-grid'> 
        <GridItem w='100%' h='10' bg='black'/>
        <GridItem w='100%' h='10' bg='black'/>
        <GridItem w='100%' h='10' bg='black'/>
        <GridItem w='100%' h='10' bg='black'/>
    </Grid>
  )
}

export default Items