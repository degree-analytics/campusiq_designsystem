import type { Preview } from '@storybook/react-vite';

// Import Tailwind CSS v4 styles globally
import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen', // Use fullscreen to allow our decorator to control the entire canvas
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
      // Check if the story has its own layout preference
      const storyLayout = context.parameters?.layout;

      return (
        <div
          className={`${isDark ? 'dark' : ''} bg-background text-foreground`}
          style={{
            minHeight: '100vh',
            width: '100%',
            padding: '1rem',
            display: storyLayout === 'centered' || !storyLayout ? 'flex' : 'block',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;