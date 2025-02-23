import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ClubItemCardProps {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
  clubName: string;
}

const ClubItemCard = ({ id, name, quantity, imageUrl, clubName }: ClubItemCardProps) => {
  const navigate = useNavigate();

  return (
    <Box
      maxW="220px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      transition="all 0.2s"
      _hover={{ shadow: 'lg' }}
    >
      <Image
        src={imageUrl}
        alt={name}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      
      <VStack p={4} align="start" spacing={3}>
        <VStack align="start" spacing={1} width="full">
          <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
            {name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {clubName}
          </Text>
          <Badge colorScheme={quantity > 0 ? "green" : "red"}>
            Available: {quantity}
          </Badge>
        </VStack>
        
        <Button
          size="sm"
          width="full"
          colorScheme="blue"
          onClick={() => navigate(`/items/${id}`)}
        >
          Show More Details
        </Button>
      </VStack>
    </Box>
  );
};

export default ClubItemCard; 