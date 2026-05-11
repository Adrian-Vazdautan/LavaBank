import { 
  TextInput, 
  PasswordInput, 
  Paper, 
  Title, 
  Text, 
  Container, 
  Button 
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function RegistrationPage() {
  const navigate = useNavigate();

  return (
    <Container size={420} my={40}>
      <Title ta="center" fw={900}>
        Create your LavaBank account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Text 
          component="span" 
          size="sm" 
          variant="link" 
          style={{ cursor: 'pointer', color: '#228be6' }} 
          onClick={() => navigate('/login')}
        >
          Login here
        </Text>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Full Name" placeholder="Adrian Vazdautan" required />
        <TextInput label="Email" placeholder="you@lavabank.dev" required mt="md" />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput label="Confirm Password" placeholder="Confirm your password" required mt="md" />
        
        <Button fullWidth mt="xl" onClick={() => navigate('/')}>
          Register
        </Button>
      </Paper>

      <Button variant="subtle" fullWidth mt="md" onClick={() => navigate('/')}>
        ← Back to home
      </Button>
    </Container>
  );
}