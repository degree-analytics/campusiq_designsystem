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
      default: 'light',
      values: [
        { name: 'light', value: 'hsl(0 0% 100%)' },
        { name: 'dark', value: 'hsl(222.2 84% 4.9%)' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Apply dark class based on background selection
      const isDark = context.globals.backgrounds?.value === 'hsl(222.2 84% 4.9%)';
      return (
        <div className={isDark ? 'dark' : ''}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;