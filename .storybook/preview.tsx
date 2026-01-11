import type { Preview, ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';
import { useEffect } from 'react';

// Import Tailwind CSS v4 styles globally
import '../src/index.css';

// Theme decorator that reads from globalTypes
const ThemeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const theme = context.globals.theme || 'light';
  const isDark = theme === 'dark';

  // Apply theme to body element so it fills the entire canvas
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isDark) {
      body.classList.add('dark');
      html.classList.add('dark');
      body.style.backgroundColor = '#18181b'; // --background dark
      body.style.color = '#fafafa'; // --foreground dark
    } else {
      body.classList.remove('dark');
      html.classList.remove('dark');
      body.style.backgroundColor = '#ffffff'; // --background light
      body.style.color = '#27272a'; // --foreground light
    }

    return () => {
      // Cleanup on unmount
      body.classList.remove('dark');
      html.classList.remove('dark');
      body.style.backgroundColor = '';
      body.style.color = '';
    };
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''} text-foreground`}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable backgrounds addon since we manage theme via globalTypes
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [ThemeDecorator],
};

export default preview;
