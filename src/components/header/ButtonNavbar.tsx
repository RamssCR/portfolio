import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@components/ui/Button'
import type { ComponentProps } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { classMerger } from '@utils/classMerger'

type ButtonNavbarProps = Omit<
  ComponentProps<typeof Button>,
  'variant' | 'children'
> & {
  isOpen?: boolean
}

export const ButtonNavbar = ({
  isOpen = false,
  ...props
}: ButtonNavbarProps) => {
  const { ariaLabel, icon } = {
    ariaLabel: isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu',
    icon: isOpen ? faX : faBars,
  }

  return (
    <Button
      variant="outline"
      aria-label={ariaLabel}
      title={ariaLabel}
      className={classMerger('px-2.5 md:hidden')}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  )
}
