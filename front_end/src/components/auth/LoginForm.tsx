import { useEffect, useState } from 'react';
import {
  GridItem,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Checkbox,
  Link,
  Grid,
  useToast,
  Box
} from '@chakra-ui/react';
import FormInput from '../common/FormInput';
import type { LoginForm as LoginFormType } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserState';

const LoginForm = () => {
  const toast = useToast();
  const {setUser} = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clubEmail: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'login success',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        // save user info to local storage
        setUser(data);
        navigate('/');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: 'login failed',
        description: error instanceof Error ? error.message : 'please check your username and password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GridItem
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.300"
      p={8}
    >
      <Box
        bg="gray.50"
        p={8}
        borderRadius="lg"
        boxShadow="sm"
        width="100%"
        maxW="500px"
      >
        <Container maxW="400px">
          <VStack spacing={8} align="stretch">
            {/* Logo and title */}
            <VStack align="stretch" spacing={3}>
              <HStack>
                <Text fontSize="xl" fontWeight="bold" color="gray.800">
                  ShareStore
                </Text>
              </HStack>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                Welcome back!
              </Text>
            </VStack>

            {/* login form */}
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4}>
                <FormInput
                  id="email"
                  label="Login"
                  icon="person"
                  placeholder="Club email"
                  value={formData.clubEmail}
                  onChange={(e) => setFormData({...formData, clubEmail: e.target.value})}
                />

                <FormInput
                  id="password"
                  label="Password"
                  icon="lock"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />

                <Grid templateColumns="1fr auto" w="100%" alignItems="center">
                  <Checkbox defaultChecked colorScheme="blue">
                    <Text color="gray.600">Remember me</Text>
                  </Checkbox>
                  <Link color="blue.500" fontSize="sm" _hover={{ color: 'blue.600' }}>
                    Forgot password?
                  </Link>
                </Grid>

                <Button
                  type="submit"
                  bg="blue.400"
                  color="white"
                  size="lg"
                  width="full"
                  _hover={{ bg: 'blue.500' }}
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
              </VStack>
            </form>

            {/* register link */}
            <Grid templateColumns="auto auto" justifyContent="center" gap={1}>
              <Text color="gray.600">Don't have an account?</Text>
              <Link color="blue.500" _hover={{ color: 'blue.600' }}>
                Sign up now
              </Link>
            </Grid>
          </VStack>
        </Container>
      </Box>
    </GridItem>
  );
};

export default LoginForm; 