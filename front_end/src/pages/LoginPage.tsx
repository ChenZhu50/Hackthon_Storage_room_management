import { Grid } from '@chakra-ui/react';
import LoginHero from '../components/auth/LoginHero';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '6fr 4fr' }}
      h="100vh"
      bg="gray.50"
    >
      <LoginHero />
      <LoginForm />
    </Grid>
  );
};

export default LoginPage; 