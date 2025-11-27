import { Link } from '@components/ui/Link'
import links from '@data/navbar.json'
import { useTranslation } from 'react-i18next'

/**
 * Renders a navigation bar with links.
 * @returns The Navbar component.
 */
export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className="hidden md:flex items-center gap-14 mr-7">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="font-medium">
          {t(`navbar.${link.id}`)}
        </Link>
      ))}
    </nav>
  )
}
