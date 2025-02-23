import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react';
import Items from './Items';
import { useUser } from './UserState';

const ClubInventoryPage = () => {
    const params = useParams();
    const {fetchClubId} = useUser();
    const [club, setClub] = useState(null);
    const admin = params.id === fetchClubId();

    useEffect(() => {
      const run = async () => {
        await fetch(`http://localhost:8000/clubs/${params.id}`).then(res => res.json()).then(data => setClub(data));
      }
      run();
    }, [params])

  return (
    <main id="home-content">
        <div id='club-page-header'>
            <Text fontSize="5xl">{club?.name}</Text>
            <Button>New Listing</Button>
        </div>
        
        <Items club={club?.id}/>
    </main>
  )
}

export default ClubInventoryPage;