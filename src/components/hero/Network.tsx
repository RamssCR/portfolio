import { Link } from '@components/ui/Link'
import { Text } from '@components/ui/Text'
import links from '@data/links.json'
import { mapIcons } from '@helpers/mapIcons'
import { classMerger } from '@utils/classMerger'
import { useTranslation } from 'react-i18next'

export const Network = () => {
  const { t } = useTranslation('hero')

  return (
    <section className="flex flex-col items-start gap-4">
      <article className="flex items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className={classMerger(
              'text-[1.3em] flex items-center justify-center',
              'size-10 p-3 rounded-full border border-primary-fg',
              'text-primary-fg hover:bg-primary-fg hover:text-primary-bg transition-colors',
              'focus:outline-none focus-visible:text-primary-bg focus-visible:bg-primary-fg',
            )}
          >
            {mapIcons[link.id as keyof typeof mapIcons]}
          </Link>
        ))}
      </article>
      <article className="flex flex-col items-start gap-2">
        <Text className="text-base text-muted">{t('alternative')}</Text>
        <Link
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={classMerger(
            'text-base text-primary-fg py-2 px-4 border border-primary-fg font-medium',
            'rounded-md hover:bg-primary-fg hover:text-primary-bg transition-colors',
            'focus:outline-none focus-visible:text-primary-bg focus-visible:bg-primary-fg',
          )}
        >
          {t('linkLabel')}
        </Link>
      </article>
    </section>
  )
}
