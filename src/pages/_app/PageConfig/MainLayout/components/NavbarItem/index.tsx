import { NavLink } from '@mantine/core';

import { RoutePath } from 'routes';

import {usePathname, useRouter} from 'next/navigation';

import classes from './index.module.css';

interface NavbarItemProps {
  label: string,
  href: RoutePath,
  activeRoutes?: RoutePath[]
}

const NavbarItem = (navItem: NavbarItemProps) => {
const {label, href} = navItem;
const pathname = usePathname();
const {push} = useRouter()

const isActive = navItem?.activeRoutes?.includes(pathname as RoutePath);
  return (
    <NavLink
      href="#required-for-focus"
      label={label}
      onClick={() => push(href)}
      classNames={{root: classes.navigationItem}}
      active={isActive}
    />
  );
};

export default NavbarItem;
