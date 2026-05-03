import { Button, Text, Title, Stack, Container } from '@mantine/core';

export function GetStartedSection() {
  return (
    <Container size="md" py={50}>
      <Stack align="center" spacing="xl">
        <Title order={2} fw={300}>Sign up and get started.</Title>
        <Button 
          size="lg" 
          radius="xl" 
          px={40}
          color="blue" // Подбери нужный оттенок синего
        >
          Get Started
        </Button>
      </Stack>
    </Container>
  );
}