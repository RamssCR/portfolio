import { Text } from '@components/ui/Text'
import { CURRENT_YEAR } from '@utils/constants'
import { useTranslation } from 'react-i18next'
import { Link } from '@components/ui/Link'
import links from '@data/links.json'
import { mapIcons } from '@helpers/mapIcons'
import { Container } from '@components/ui/Container'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="w-full py-4 border-t border-t-muted/20 items-start px-4">
      <Container className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center">
        <Text className="text-base text-muted">
          &reg; {CURRENT_YEAR} {t('footer.copyright')}
        </Text>
        <section className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] text-muted hover:text-primary-fg transition-colors"
            >
              {mapIcons[link.id as keyof typeof mapIcons]}
            </Link>
          ))}
        </section>
      </Container>
    </footer>
  )
}
