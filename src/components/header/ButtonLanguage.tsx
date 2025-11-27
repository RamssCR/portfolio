import type { ComponentProps } from 'react'
import { Button } from '@components/ui/Button'
import { classMerger } from '@utils/classMerger'

type ButtonLanguageProps = Omit<
  ComponentProps<typeof Button>,
  'variant' | 'children'
> & {
  isEnglish?: boolean
}

export const ButtonLanguage = ({
  isEnglish = false,
  ...props
}: ButtonLanguageProps) => {
  const { ariaLabel, icon } = {
    ariaLabel: isEnglish ? 'Cambiar a Español' : 'Switch to English',
    icon: isEnglish ? 'ES' : 'EN',
  }

  return (
    <Button
      variant="outline"
      aria-label={ariaLabel}
      className={classMerger(
        'px-1.5 lg:p-2 lg:rounded-full hover:bg-transparent hover:text-primary-fg',
        'border-transparent border-0 text-[1.4em] font-bold',
      )}
      {...props}
    >
      {icon}
    </Button>
  )
}
