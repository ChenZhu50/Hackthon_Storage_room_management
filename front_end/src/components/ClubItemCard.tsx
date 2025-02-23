import { useState } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

interface ClubItemCardProps {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
}

const ClubItemCard = ({ id, name, quantity, imageUrl }: ClubItemCardProps) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [isChanged, setIsChanged] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleQuickChange = (amount: number) => {
    setItemQuantity(prev => Math.max(0, prev + amount));
    setIsChanged(true);
  };

  const handleCustomChange = (value: number) => {
    setItemQuantity(value);
    setIsChanged(true);
    onClose();
  };

  const handleSubmit = async () => {
    try {
      // TODO: 实现API调用
      console.log('Updating quantity for item:', id, 'to:', itemQuantity);
      setIsChanged(false);
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

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
        <Text fontWeight="bold" fontSize="lg" noOfLines={1}>
          {name}
        </Text>
        
        <Text fontSize="md">
          Quantity: {itemQuantity}
        </Text>
        
        <HStack spacing={2} width="full">
          <IconButton
            aria-label="Decrease by 1"
            icon={<MinusIcon />}
            size="sm"
            onClick={() => handleQuickChange(-1)}
          />
          
          <IconButton
            aria-label="Increase by 1"
            icon={<AddIcon />}
            size="sm"
            onClick={() => handleQuickChange(1)}
          />
          
          <Popover
            isOpen={isOpen}
            onClose={onClose}
            placement="bottom"
          >
            <PopoverTrigger>
              <Button size="sm" onClick={onToggle} flex={1}>
                Custom Amount
              </Button>
            </PopoverTrigger>
            <PopoverContent width="200px">
              <PopoverArrow />
              <PopoverBody>
                <NumberInput
                  defaultValue={itemQuantity}
                  min={0}
                  onBlur={(e) => handleCustomChange(parseInt(e.target.value))}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>

        <Divider />
        
        <Button
          size="sm"
          width="full"
          colorScheme="green"
          isDisabled={!isChanged}
          onClick={handleSubmit}
        >
          Submit Changes
        </Button>
      </VStack>
    </Box>
  );
};

export default ClubItemCard; 