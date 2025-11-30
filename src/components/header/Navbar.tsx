import { Link } from '@components/ui/Link'
import { classMerger } from '@utils/classMerger'
import links from '@data/navbar.json'
import { useParam } from '@hooks/useParam'
import { useTranslation } from 'react-i18next'

/**
 * Renders a navigation bar with links.
 * @returns The Navbar component.
 */
export const Navbar = () => {
  const { t } = useTranslation()
  const { param, getParam } = useParam()

  return (
    <nav className="hidden md:flex items-center gap-14 mr-7">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classMerger(
            'font-medium',
            param === link.id && 'text-primary-fg',
          )}
          onClick={getParam}
        >
          {t(`navbar.${link.id}`)}
        </Link>
      ))}
    </nav>
  )
}
