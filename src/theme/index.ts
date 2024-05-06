import {
  createTheme,
  CSSVariablesResolver,
} from '@mantine/core';

import { Space_Grotesk } from 'next/font/google';

const SpaceGroteskFont = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: {
    fontFamily: SpaceGroteskFont.style.fontFamily,
  },
  lineHeights: {
    md: '1.45',
  },
  primaryColor: 'dark',
  primaryShade: 6,
});

export const variablesResolver: CSSVariablesResolver = ({ other }) => ({
  variables: {
    // font-weight
    '--font-weight-bold': '700',
    '--font-weight-semi-bold': '600',
    '--font-weight-medium': '500',
    '--font-weight-regular': '400',

    // font-size
    '--font-size-xxl': '52px',
    '--font-size-xl': '32px',
    '--font-size-large': '26px',
    '--font-size-medium': '18px',
    '--font-size-small': '16px',
    '--font-size-extra-small': '12px',

    // spacing
    '--spacing-extra-large': '36px',
    '--spacing-large': '32px',
    '--spacing-medium': '24px',
    '--spacing-small': '16px',
    '--spacing-extra-small': '12px',

    // common padding
    '--page-padding': '144px',

    // radius
    '--radius-medium': '24px',
    '--radius-small': '16px',
    '--radius-extra-small': '12px',

    // icon-size
    '--icon-size-medium': '24px',

    // block dimensions
    '--navbar-width': '232px',
    '--header-height': '91px',
  },

  light: {
    '--mantine-color-deep-orange': other.deepOrangeLight,
  },

  dark: {
    '--mantine-color-deep-orange': other.deepOrangeDark,
  },
});
