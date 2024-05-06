import { ReactNode } from 'react';

import {AppShell, Center} from '@mantine/core';

import Navbar from './components/Navbar';

import classes from './index.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AppShell
      classNames={{
        root: classes.root,
        main: classes.main,
        navbar: classes.navbar,
        header: classes.header,
      }}
    >
      <AppShell.Main>
        <Center>
          {children}
        </Center>
      </AppShell.Main>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
    </AppShell>
  );
};

export default MainLayout;
