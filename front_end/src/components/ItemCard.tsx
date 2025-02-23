import { Box, Image, Text, VStack, Button, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ItemCardProps {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
  club: string;
}

const ItemCard = ({ id, name, quantity, club, imageUrl }: ItemCardProps) => {
  const navigate = useNavigate();

  return (
    <Box
      maxW="220px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      <Image
        src={imageUrl}
        alt={name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      
      <VStack p={4} align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
          {name}
        </Text>
        
        <Badge colorScheme={quantity > 0 ? 'green' : 'red'}>
          Available: {quantity}
        </Badge>
        
        <Text fontSize="sm" color="gray.600">
          {club}
        </Text>
        
        <Button
          size="sm"
          width="full"
          colorScheme="blue"
          onClick={() => navigate(`/items/${id}`)}
        >
          View Details ▼
        </Button>
      </VStack>
    </Box>
  );
};

export default ItemCard; 