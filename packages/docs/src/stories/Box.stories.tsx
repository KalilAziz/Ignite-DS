import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento - Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
