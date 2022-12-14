import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo praesentium voluptatum, obcaecati ratione, dolor eveniet atque, autem pariatur sunt omnis labore quidem ducimus laboriosam fuga sit animi nesciunt! Aut.',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
