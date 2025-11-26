import type { AnchorHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  selected?: boolean
}

export const Link = ({ className, selected = false, ...props }: LinkProps) => (
  <a
    className={classMerger(
      'text-base hover:text-primary-fg transition-colors duration-100',
      'focus:outline-none focus-visible:text-primary-fg',
      selected ? 'text-primary-fg' : 'text-muted',
      className,
    )}
    {...props}
  />
)
