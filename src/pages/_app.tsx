import Head from 'next/head';
import { AppProps } from 'next/app';

// import queryClient from 'query-client';

// import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { theme, variablesResolver } from 'theme';

import PageConfig from 'pages/_app/PageConfig';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <title>MasteryHive</title>
    </Head>

    <MantineProvider
        theme={theme}
        cssVariablesResolver={variablesResolver}
      >
        <ModalsProvider>
          <Notifications
            zIndex={1000}
            autoClose={5000}
            position="top-center"
          />

        <PageConfig>
          <Component {...pageProps} />
        </PageConfig>
        </ModalsProvider>
      </MantineProvider>
  </>
  )
};

export default App;
