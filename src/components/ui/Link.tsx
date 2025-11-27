import type { AnchorHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  selected?: boolean
}

/**
 * Renders a styled link component.
 * @param props - The properties for the link component.
 * @returns The Link component.
 */
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
