import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@paguesimples/ui': require('path').resolve(__dirname, '../../../packages/ui/src'),
          '@paguesimples/tokens': require('path').resolve(__dirname, '../../../packages/tokens/src'),
        },
      },
    };
  },
};

export default config;