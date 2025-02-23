import React, { useState, useRef } from 'react';
import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Image,
  Text,
  useToast,
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../components/UserState';

const NewListingPage = () => {
  const navigate = useNavigate();
  const {fetchClubId, loggedIn} = useUser();
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: 0,
    club: fetchClubId(),
    requests: []
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("SUBMITTING");
      console.log(formData);
      const response = await fetch(`http://localhost:8000/clubs/${fetchClubId()}/listings/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, by: fetchClubId()}),
      });
      console.log(response);
      const data = await response.json();
      if (response.ok) navigate(`/items/${data}`);

      navigate(`/clubs/${formData.club}/inventory`);
    } catch (error) {

    }
  };
  if (!loggedIn()) {
    return (
      <Text>You must be logged in to view this page.</Text>
    )
  }
  return (
    <Container maxW="800px" py={8}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">Create New Listing</Text>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            {/* Image Upload */}
            <Box
              position="relative"
              height="300px"
              borderWidth={2}
              borderStyle="dashed"
              borderRadius="md"
              cursor="pointer"
              onClick={handleImageClick}
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              ) : (
                <VStack spacing={2}>
                  <Icon as={AddIcon} w={10} h={10} />
                  <Text>Click to upload image</Text>
                </VStack>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </Box>

            {/* Title */}
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter item title"
              />
            </FormControl>

            {/* Description */}
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter item description"
                rows={4}
              />
            </FormControl>

            {/* Quantity */}
            <FormControl isRequired>
              <FormLabel>Quantity</FormLabel>
              <NumberInput
                value={formData.quantity}
                onChange={(_, value) => setFormData({...formData, quantity: value})}
                min={1}
                mb={3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
            >
              Create Listing
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default NewListingPage; 