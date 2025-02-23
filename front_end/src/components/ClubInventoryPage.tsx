import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { 
  Button, 
  Text, 
  Container,
  SimpleGrid,
  Input,
  VStack,
  HStack,
  Flex,
} from '@chakra-ui/react';
import ClubItemCard from './ClubItemCard';
import Items from './Items';
import { useUser } from './UserState';

interface Item {
  id: string;
  name: string;
  quantity: number;
  clubId: string;
  clubName: string;
  imageUrl: string;
}

const ClubInventoryPage = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const {fetchClubId} = useUser();
  const [club, setClub] = useState(null);
  const [clubItems, setClubItems] = useState([]);
  const admin = id === fetchClubId();
        
  useEffect(() => {
    const run = async () => {
      await fetch(`http://localhost:8000/clubs/${id}`).then(res => res.json()).then(data => setClub(data));
      await fetch(`http://localhost:8000/clubs/${id}/items`).then(res => res.json()).then(data => setClubItems(data));
    }
    run();
  }, [id])

  // const clubItems = items.filter(item => 
  //   item.clubId === clubId &&
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <main id="home-content">
      <Container maxW="1440px" py={8}>
        <VStack spacing={8} align="stretch">
          <Flex justify="space-between" align="center">
            <Text fontSize="4xl"><b>{club?.name}</b> Club Inventory</Text>
            <HStack spacing={4}>
              <Input
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                width="300px"
              />
              <Link to={`/clubs/${id}/new-listing`}>
                <Button 
                  colorScheme="blue"
                >
                  New Listing
                </Button>
              </Link>
            </HStack>
          </Flex>

          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} 
            spacing={6}
          >
            {clubItems.map(item => (
              <ClubItemCard key={item._id} id={item._id} name={item.title} quantity={item.quantity} clubName={null}/>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </main>
  );
};

export default ClubInventoryPage;