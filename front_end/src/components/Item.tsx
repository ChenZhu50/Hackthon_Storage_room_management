import React from 'react'
import { GridItem, Box, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id }) => {
  return (
    <Link to={`/items/${id}`}>
        <Box className='club-item' >
            <img className='item-image' src='https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s'/>
            <Text fontSize="xl">Plates</Text>
            <Text fontSize="lg">Debate Club</Text>
            <Text>100</Text>
        </Box>
    </Link>
  )
}

export default Item