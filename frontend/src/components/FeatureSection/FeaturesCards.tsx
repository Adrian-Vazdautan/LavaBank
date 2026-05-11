import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Center,
  Card,
  Box,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Individuals',
    description:
      'Find out why we have more than 200M active accounts worldwide.',
    icon: IconGauge,
  },
  {
    title: 'Businesses',
    description:
      'Join more than 7 million businesses around the world offering PayPal.',
    icon: IconUser,
  },
  {
    title: 'Partners and developers',
    description:
      'Work with PayPal to offer your customers world class payment solutions.',
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Box key={feature.title} padding="xl">
      <Center><feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} /></Center>
      <Text fz="lg" fw={500} mt="md" ta="center">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm" ta="center">
        {feature.description}
      </Text>
    </Box>
  ));

  return (
    <Container size="lg" py="xl">

      <Title order={2} className={classes.title} ta="center" mt="sm">
        PayPal is for everyone who pays or gets paid.
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}