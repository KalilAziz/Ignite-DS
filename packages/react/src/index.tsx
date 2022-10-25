import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: '0',
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '14',
        padding: '$2 $4',
      },
      big: {
        fontSize: '14',
        padding: '$3 $6',
      },
    },
    color: {
      primary: {
        color: '$white',
      },
      secondary: {
        color: '$black',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>