import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * A badge component for displaying small pieces of information or status.
 * It supports styling via the `className` prop and includes default styles.
 * @param props - Props for the Badge component, extending standard HTML span attributes.
 * @returns A styled badge component.
 */
export const Badge = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={classMerger(
      'inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold',
      'bg-primary-fg text-primary-bg',
      className,
    )}
    {...props}
  />
)
