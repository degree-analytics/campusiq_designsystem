import type { Preview } from '@storybook/react-vite';

// Import Tailwind CSS v4 styles globally
import '../src/index.css';

const preview: Preview = {
  parameters: {
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
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const isDark = theme === 'dark';

      return (
        <div
          className={`${isDark ? 'dark' : ''} bg-background text-foreground`}
          style={{
            minHeight: '100vh',
            padding: '1rem',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;