import type { Meta, StoryObj } from '@storybook/react';

import FancyInfoCard from './FancyInfoCard';

const meta = {
  component: FancyInfoCard,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Thats only the Style of the InfoCard, it accepts all kind of children.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    outlined: {
      description: 'The component has a outline style',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outline',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
      defaultValue: {
        summary: 10,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyInfoCard {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'primary',
    layer: 1,
  },
};
