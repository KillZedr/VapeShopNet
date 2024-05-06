import {Stack, Center} from '@mantine/core';
import { ReactNode } from 'react';

interface UnauthorizedLayoutProps {
  children: ReactNode;
}

const UnauthorizedLayout = ({ children }: UnauthorizedLayoutProps) => {
  return (
      <Stack maw="1440px" miw="474px" h="100dvh" m="auto">
        <Center px="20px" w="100%" h="100%" component="main">
          {children}
        </Center>
      </Stack>
    )
};

export default UnauthorizedLayout;
