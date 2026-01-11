import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

// Light theme - CampusIQ brand
const campusIQLightTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'CampusIQ Design System',
  brandUrl: 'https://github.com/southleft/campusiq',
  brandImage: '/campusiq-logo.webp',
  brandTarget: '_self',

  // Colors matching the design system
  colorPrimary: '#5e4890', // CampusIQ Purple
  colorSecondary: '#3FBFBF', // Teal from logo

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E4E4E7',
  appBorderRadius: 8,

  // Text colors
  textColor: '#27272a',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#71717a',

  // Toolbar
  barTextColor: '#71717a',
  barSelectedColor: '#5e4890',
  barHoverColor: '#5e4890',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E4E4E7',
  inputTextColor: '#27272a',
  inputBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"Fira Code", "Monaco", monospace',
});

// Dark theme - CampusIQ brand
const campusIQDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'CampusIQ Design System',
  brandUrl: 'https://github.com/southleft/campusiq',
  brandImage: '/campusiq-logo.webp',
  brandTarget: '_self',

  // Colors matching the design system (lighter for dark mode)
  colorPrimary: '#a78bfa', // Lighter purple for dark mode
  colorSecondary: '#5eead4', // Lighter teal for dark mode

  // UI
  appBg: '#18181b',
  appContentBg: '#27272a',
  appPreviewBg: '#18181b',
  appBorderColor: 'rgba(255, 255, 255, 0.1)',
  appBorderRadius: 8,

  // Text colors
  textColor: '#fafafa',
  textInverseColor: '#18181b',
  textMutedColor: '#a1a1aa',

  // Toolbar
  barTextColor: '#a1a1aa',
  barSelectedColor: '#a78bfa',
  barHoverColor: '#a78bfa',
  barBg: '#27272a',

  // Form colors
  inputBg: '#3f3f46',
  inputBorder: 'rgba(255, 255, 255, 0.15)',
  inputTextColor: '#fafafa',
  inputBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"Fira Code", "Monaco", monospace',
});

addons.setConfig({
  theme: campusIQLightTheme,
  sidebar: {
    showRoots: true,
  },
});

// Export themes for use in preview.tsx
export { campusIQLightTheme, campusIQDarkTheme };
