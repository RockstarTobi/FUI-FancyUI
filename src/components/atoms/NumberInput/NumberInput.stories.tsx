import type { Meta, StoryObj } from '@storybook/react';

import NumberInput from './NumberInput';

const meta = {
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A Modal component to show a Dialog with a Backdrop',
      },
    },
  },
  argTypes: {
    autoWidth: {
      description: 'If true, the width of the input will be automatically adjusted to fit the content.',
      type: { name: 'boolean' },
    },
    align: {
      description: 'The alignment of the text.',
      type: { name: 'string' },
    },
    step: {
      description: 'The step to increment or decrement the value.',
      type: { name: 'number' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <NumberInput {...args} />,
  args: {
    autoWidth: false,
    align: 'left',
    step: 1,
  },
};
