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
      title={ariaLabel}
      className={classMerger(
        'px-1.5 py-0 lg:px-2 lg:py-1 lg:rounded-full',
        'border-transparent border-0 text-[1.3em] font-bold',
      )}
      {...props}
    >
      {icon}
    </Button>
  )
}
