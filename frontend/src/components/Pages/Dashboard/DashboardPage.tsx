import { AppShell, Burger, Group, Text, Title, NavLink, Stack, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function DashboardPage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* Хедер личного кабинета */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700} size="xl" c="blue">LavaBank 🌋</Text>
        </Group>
      </AppShell.Header>

      {/* Боковое меню (Sidebar) */}
      <AppShell.Navbar p="md">
        <Stack gap="sm">
          <NavLink label="Обзор" active />
          <NavLink label="Мои карты" />
          <NavLink label="Транзакции" />
          <NavLink label="Настройки" />
        </Stack>
      </AppShell.Navbar>

      {/* Основной контент */}
      <AppShell.Main bg="gray.0">
        <Title order={2} mb="lg">Добро пожаловать, Adrian!</Title>
        
        <Group grow>
          <Paper p="xl" withBorder radius="md">
            <Text size="sm" c="dimmed">Баланс счета</Text>
            <Text size="xl" fw={700}>$12,450.00</Text>
          </Paper>
          
          <Paper p="xl" withBorder radius="md">
            <Text size="sm" c="dimmed">Активные карты</Text>
            <Text size="xl" fw={700}>3</Text>
          </Paper>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}