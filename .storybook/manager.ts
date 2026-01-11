import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const campusIQTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'CampusIQ Design System',
  brandUrl: 'https://github.com/southleft/campusiq',
  brandImage: '/campusiq-logo.webp',
  brandTarget: '_self',

  // Colors matching the design system
  colorPrimary: '#5B4B9E', // Purple from logo
  colorSecondary: '#3FBFBF', // Teal from logo

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E5E5',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1A1A1A',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#6B7280',

  // Toolbar
  barTextColor: '#6B7280',
  barSelectedColor: '#5B4B9E',
  barHoverColor: '#5B4B9E',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#D1D5DB',
  inputTextColor: '#1A1A1A',
  inputBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"Fira Code", "Monaco", monospace',
});

addons.setConfig({
  theme: campusIQTheme,
  sidebar: {
    showRoots: true,
  },
});
