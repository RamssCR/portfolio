import type { ComponentProps } from 'react'
import { Link } from '@components/ui/Link'
import { Sheet } from '@components/ui/Sheet'
import { Title } from '@components/ui/Title'
import links from '@data/navbar.json'
import { useTranslation } from 'react-i18next'
import { useParam } from '@hooks/useParam'
import { classMerger } from '@utils/classMerger'

/**
 * Mobile Navigation Bar Component.
 * @param props - Component properties.
 * @returns A React component rendering the mobile navigation bar.
 */
export const MobileNavbar = ({
  active,
  onClose,
}: ComponentProps<typeof Sheet>) => {
  const { t } = useTranslation()
  const { param, getParam } = useParam()

  /**
   * Handles the closing of the mobile navbar.
   * It triggers the onClose function and updates the URL parameter.
   */
  const handleClose = () => {
    onClose()
    getParam()
  }

  return (
    <Sheet active={active} onClose={onClose}>
      <Title as="h2" className="text-fg text-xl">
        {t('titles.modal')}
      </Title>
      <nav className="w-full flex flex-col items-start gap-1 mt-6">
        {links.map(({ id, href }) => (
          <Link
            key={id}
            href={href}
            className={classMerger(
              'w-full py-2 px-3 rounded-md hover:bg-muted/10 transition-colors',
              param === id && 'bg-muted/10',
            )}
            onClick={handleClose}
          >
            {t(`navbar.${id}`)}
          </Link>
        ))}
      </nav>
    </Sheet>
  )
}
