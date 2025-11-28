import type { HTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

export const Container = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classMerger(
      'mx-auto w-full xl:max-w-7xl 2xl:max-w-8xl',
      className,
    )}
    {...props}
  />
)
