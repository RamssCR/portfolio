import * as TabPrimitives from '@radix-ui/react-tabs'
import type { ComponentProps } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Renders a set of tabs for navigation or content organization.
 * @param props - The properties for the Tabs component.
 * @returns A Tabs component.
 */
const Tabs = ({
  className,
  ...props
}: ComponentProps<typeof TabPrimitives.Root>) => (
  <TabPrimitives.Root
    data-slot="tabs"
    className={classMerger('w-full flex flex-col gap-2', className)}
    {...props}
  />
)

/**
 * Renders the list of tabs.
 * @param props - The properties for the TabsList component.
 * @returns A TabsList component.
 */
const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof TabPrimitives.List>) => (
  <TabPrimitives.List
    data-slot="tabs-list"
    className={classMerger(
      'text-fg inline-flex h-9 w-full items-center justify-center border-b border-muted',
      className,
    )}
    {...props}
  />
)

/**
 * Renders a trigger for a specific tab.
 * @param props - The properties for the TabsTrigger component.
 * @returns A TabsTrigger component.
 */
const TabsTrigger = ({
  className,
  ...props
}: ComponentProps<typeof TabPrimitives.Trigger>) => (
  <TabPrimitives.Trigger
    data-slot="tabs-trigger"
    className={classMerger(
      'data-[state=active]:border-b-primary-fg data-[state=active]:text-primary-fg data-[state=active]:border-b-2',
      'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm lg:text-base',
      'font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:text-primary-fg',
      className,
    )}
    tabIndex={0}
    {...props}
  />
)

/**
 * Renders the content for a specific tab.
 * @param props - The properties for the TabsContent component.
 * @returns A TabsContent component.
 */
const TabsContent = ({
  className,
  ...props
}: ComponentProps<typeof TabPrimitives.Content>) => {
  return (
    <TabPrimitives.Content
      data-slot="tabs-content"
      className={classMerger('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
