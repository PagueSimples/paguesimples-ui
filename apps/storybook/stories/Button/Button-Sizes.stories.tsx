import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@paguesimples/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Sizes',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Diferentes tamanhos disponíveis para o botão.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    variant: 'default',
  },
};

export const Default: Story = {
  args: {
    children: 'Default Size',
    size: 'default',
    variant: 'default',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'default',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl',
    variant: 'default',
  },
};

export const Icon: Story = {
  args: {
    children: '→',
    size: 'icon',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botão quadrado para ícones.',
      },
    },
  },
};