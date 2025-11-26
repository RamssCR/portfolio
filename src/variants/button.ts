import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  base: 'inline-flex items-center justify-center rounded-lg border border-transparent text-sm font-medium hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-fg transition-colors',
  variants: {
    variant: {
      primary: 'bg-primary-fg text-primary-bg hover:brightness-110',
      outline:
        'border-primary-fg text-primary-fg hover:bg-primary-fg hover:text-primary-bg',
    },
    size: {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type Variants = VariantProps<typeof variants>
