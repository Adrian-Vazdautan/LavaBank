import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          The simpler, safer way to pay and get <br/>paid.
        </Title>

        <div className={classes.controls}>
          <Button 
            size="lg" 
            radius="xl" 
            px={150}
            color="blue" // Подбери нужный оттенок синего
          >
            Sign Up for Free
          </Button>
        </div>
        <Text c="white" mt="30" ta="center" w="100%">
          Own a business? Open a Business account.
        </Text>
      </div>
    </div>
  );
}