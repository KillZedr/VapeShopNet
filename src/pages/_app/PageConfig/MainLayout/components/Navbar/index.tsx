import { Group, Stack } from '@mantine/core';

import { RoutePath } from 'routes';

import Link from 'next/link';

import Image from 'next/image';

import NavbarItem from '../NavbarItem';

import classes from './index.module.css';

const navitemList = [
  {
    label:'Vape Shop',
    href: RoutePath.Home,
    activeRoutes: [RoutePath.Home]
  },
  {
    label:'Category',
    href: RoutePath.Category,
    activeRoutes: [RoutePath.Category]
  },
      {
    label:'Manufacture',
    href: RoutePath.Manufacture,
    activeRoutes: [RoutePath.Manufacture]
  },
      {
    label:'Basket',
    href: RoutePath.Basket,
    activeRoutes: [RoutePath.Basket]
  }
]

const Navbar = () => {

  return (
    <Group className={classes.navbarWrapper}>
      <Stack className={classes.topButtonsWrapper}>
        <Stack>
          <Link
            type="router"
            href={RoutePath.Home}
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </Link>
        </Stack>

        {
          navitemList.map((navitem)=> (
            <NavbarItem
              key={navitem.label}
              {...navitem}
            />
          ))
        }
      </Stack>
    </Group>
  );
};

export default Navbar;
