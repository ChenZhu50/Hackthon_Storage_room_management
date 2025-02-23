import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  SimpleGrid,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import ClubItemCard from '../components/ClubItemCard';

interface Item {
  id: string;
  name: string;
  quantity: number;
  clubId: number;
  imageUrl: string;
}

// 测试数据
const testItems: Item[] = [
  {
    id: '1',
    name: 'Tennis Racket',
    quantity: 5,
    clubId: 1,
    imageUrl: 'https://via.placeholder.com/200'
  },
  {
    id: '2',
    name: 'Basketball',
    quantity: 10,
    clubId: 1,
    imageUrl: 'https://via.placeholder.com/200'
  },
  // ... 更多测试数据
];

const ClubInventoryPage = () => {
  const { clubId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState<Item[]>(testItems);

  // 筛选属于当前俱乐部的物品
  const clubItems = items.filter(item => 
    item.clubId === Number(clubId) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="1440px" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Club Inventory Management</Heading>
        
        <Input
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="400px"
        />

        {clubItems.length === 0 ? (
          <Text>No items found</Text>
        ) : (
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} 
            spacing={6}
          >
            {clubItems.map(item => (
              <ClubItemCard key={item.id} {...item} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default ClubInventoryPage; 