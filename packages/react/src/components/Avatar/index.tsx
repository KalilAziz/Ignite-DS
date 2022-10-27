import { ComponentProps, FC } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: FC = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
