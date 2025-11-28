import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import type { ComponentProps } from 'react'
import { Button } from '@components/ui/Button'
import { classMerger } from '@utils/classMerger'
import { useTranslation } from 'react-i18next'

type ButtonThemeProps = Omit<
  ComponentProps<typeof Button>,
  'variant' | 'children'
> & {
  isDarkMode?: boolean
}

export const ButtonTheme = ({
  isDarkMode = false,
  ...props
}: ButtonThemeProps) => {
  const { t } = useTranslation('accessibility')

  const { ariaLabel, icon } = {
    ariaLabel: isDarkMode
      ? t('triggers.close.theme')
      : t('triggers.open.theme'),
    icon: isDarkMode ? faSun : faMoon,
  }

  return (
    <Button
      variant="outline"
      aria-label={ariaLabel}
      title={ariaLabel}
      className={classMerger(
        'px-1.5 lg:px-1 lg:py-1 lg:h-8.25 lg:w-9 lg:rounded-full py-0',
        'border-transparent border-0 text-[1.4em]',
      )}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  )
}
