import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@paguesimples/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/States',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Estados e interações do botão.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'Normal Button',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'default',
  },
};

export const GradientNormal: Story = {
  args: {
    children: 'Gradient Normal',
    variant: 'gradient',
  },
};

export const GradientDisabled: Story = {
  args: {
    children: 'Gradient Disabled',
    disabled: true,
    variant: 'gradient',
  },
};

export const OutlineNormal: Story = {
  args: {
    children: 'Outline Normal',
    variant: 'outline',
  },
};

export const OutlineDisabled: Story = {
  args: {
    children: 'Outline Disabled',
    disabled: true,
    variant: 'outline',
  },
};