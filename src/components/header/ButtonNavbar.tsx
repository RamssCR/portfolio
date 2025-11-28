import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@components/ui/Button'
import type { ComponentProps } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { classMerger } from '@utils/classMerger'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('accessibility')

  const { ariaLabel, icon } = {
    ariaLabel: isOpen
      ? t('triggers.close.navbarModal')
      : t('triggers.open.navbarModal'),
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
