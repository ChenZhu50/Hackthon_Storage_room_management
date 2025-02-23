import { Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ClubItemCard from './ClubItemCard';

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const run = async () => {
      await fetch('http://localhost:8000/items/').then(res => res.json()).then(data => setItems(data));
    }
    run();
  }, []);
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={15} id='items-grid'> 
      {items.map((item, i) => (
        <ClubItemCard key={item._id} id={item._id} name={item.title} quantity={item.quantity} imageUrl={item.imageUrl} clubName={null}/>
      ))}
    </Grid>
  )
}

export default Items