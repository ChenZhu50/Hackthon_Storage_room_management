import { Divider, Text } from '@chakra-ui/react';
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const itemId = useParams();
  const [itemObject, setItemObject] = useState(null);
  return (
    <main className='club-item-page'>
      <img className='item-image' src='https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s'/>
      <Divider />
      <Text fontSize='4xl'>Plates</Text>
      <Text fontSize='xl'>These are typical plates, we have like 100 of them, so come pick it up.</Text>
      <Text fontSize='xl'>Quantity: 100</Text>
      <Text fontSize='xl'>From: Debate Club</Text>
    </main>
  )
}

export default ItemPage