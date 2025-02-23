import { Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Item from './Item';

const Items = ({ club }) => {
  const [items, setItems] = useState(['i']);
  useEffect(() => {
    if (club) {
      // do stuff
    }
  }, [club]);
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={15} id='items-grid'> 
      {items.map((item, i) => (
        <Item key={i} id={item} />
      ))}
    </Grid>
  )
}

export default Items