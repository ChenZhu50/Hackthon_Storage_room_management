import { useState } from 'react';
import {
  GridItem,
  Container,
  VStack,
  HStack,
  Text,
  FormControl,
  Input,
  Button,
  Checkbox,
  Link,
  Grid,
  useToast,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Box
} from '@chakra-ui/react';
import FormInput from '../common/FormInput';
import type { LoginForm as LoginFormType } from '../../types/auth';

const LoginForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState<LoginFormType>({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // ... 登录逻辑 ...
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
            {/* Logo和标题 */}
            <VStack align="stretch" spacing={3}>
              <HStack>
                <Text fontSize="xl" fontWeight="bold" color="gray.800">
                  StorageRoom Management System
                </Text>
              </HStack>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                Welcome back!
              </Text>
            </VStack>

            {/* 登录表单 */}
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4}>
                <FormInput
                  id="username"
                  label="Login"
                  icon="person"
                  placeholder="Email or phone number"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
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

                <Button
                  variant="outline"
                  size="lg"
                  width="full"
                  borderColor="gray.200"
                  color="gray.700"
                  _hover={{ bg: 'gray.50' }}
                >
                  Or sign in with Google
                </Button>
              </VStack>
            </form>

            {/* 注册链接 */}
            <Grid templateColumns="auto auto" justifyContent="center" gap={1}>
              <Text color="gray.600">Don't have an account?</Text>
              <Link color="blue.500" _hover={{ color: 'blue.600' }}>
                Sign up now
              </Link>
            </Grid>

            {/* 页脚 */}
            <Grid templateColumns="1fr 1fr" gap={4}>
              <Text fontSize="sm" color="gray.600">@StorageRoom Management System</Text>
              <Text fontSize="sm" color="gray.500" justifySelf="end">
                © Perfect Login 2025
              </Text>
            </Grid>
          </VStack>
        </Container>
      </Box>
    </GridItem>
  );
};

export default LoginForm; 