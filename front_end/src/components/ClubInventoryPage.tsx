import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react';
import Items from './Items';

const ClubInventoryPage = () => {
    const id = useParams();
  return (
    <main id="home-content">
        <div id='club-page-header'>
            <Text fontSize="5xl">Debate Club</Text>
            <Button>New Listing</Button>
        </div>
        
        <Items club={id}/>
    </main>
  )
}

export default ClubInventoryPage;