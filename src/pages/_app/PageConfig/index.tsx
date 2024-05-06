
'use client'
import { Fragment, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'

import { routesConfiguration, ScopeType, LayoutType, RoutePath } from 'routes';

import MainLayout from './MainLayout';
import UnauthorizedLayout from './UnauthorizedLayout';

const layoutToComponent = {
  [LayoutType.MAIN]: MainLayout,
  [LayoutType.UNAUTHORIZED]: UnauthorizedLayout,
};

interface PageConfigProps {
  children: ReactNode;
}

const PageConfig = ({ children }: PageConfigProps) => {
  const { push } = useRouter();
  const route = usePathname()

  const account = {};

  const { scope, layout } = routesConfiguration[route as RoutePath] || {};
  const Layout = layout ? layoutToComponent[layout] : Fragment;

  useEffect(() => {
    if (scope === ScopeType.PRIVATE && !account) {
      push(RoutePath.SignIn);
    }
  
    if (scope === ScopeType.PRIVATE
      && account
    ) {
      push(RoutePath.Home);
    }
  }, [account, push, scope])

  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default PageConfig;
