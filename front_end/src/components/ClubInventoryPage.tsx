import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

interface Item {
  id: string;
  name: string;
  quantity: number;
  clubId: string;
  clubName: string;
  imageUrl: string;
}

// 测试数据
const testItems: Item[] = [
  {
    id: '1',
    name: 'Tennis Racket',
    quantity: 5,
    clubId: 'club-1',
    clubName: 'Tennis Club',
    imageUrl: 'https://via.placeholder.com/200'
  },
  {
    id: '2',
    name: 'Basketball',
    quantity: 10,
    clubId: 'club-1',
    clubName: 'Basketball Club',
    imageUrl: 'https://via.placeholder.com/200'
  },
  {
    id: '3',
    name: 'Volleyball',
    quantity: 8,
    clubId: 'club-2',
    clubName: 'Volleyball Club',
    imageUrl: 'https://via.placeholder.com/200'
  }
];

const ClubInventoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState<Item[]>(testItems);

  const clubItems = items.filter(item => 
    item.clubId === id &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main id="home-content">
      <Container maxW="1440px" py={8}>
        <VStack spacing={8} align="stretch">
          <Flex justify="space-between" align="center">
            <Text fontSize="4xl">Club Inventory</Text>
            <HStack spacing={4}>
              <Input
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                width="300px"
              />
              <Button 
                colorScheme="blue"
                onClick={() => navigate(`/clubs/${id}/new-listing`)}
              >
                New Listing
              </Button>
            </HStack>
          </Flex>

          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} 
            spacing={6}
          >
            {clubItems.map(item => (
              <ClubItemCard key={item.id} {...item} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </main>
  );
};

export default ClubInventoryPage;
