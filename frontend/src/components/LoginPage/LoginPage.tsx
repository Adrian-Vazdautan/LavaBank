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

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container size={420} my={40}>
      <Title ta="center" fw={900}>
        Welcome back to LavaBank!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Don't have an account yet?{' '}
        <Text component="span" size="sm" variant="link" style={{ cursor: 'pointer' }}>
          Create account
        </Text>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@lavabank.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        
        <Button fullWidth mt="xl" onClick={() => navigate('/')}>
          Sign in
        </Button>
      </Paper>

      <Button variant="subtle" fullWidth mt="md" onClick={() => navigate('/')}>
        ← Back to home
      </Button>
    </Container>
  );
}