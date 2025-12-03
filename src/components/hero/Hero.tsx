import { Badge } from '@components/ui/Badge'
import { Container } from '@components/ui/Container'
import { Text } from '@components/ui/Text'
import { Title } from '@components/ui/Title'
import { useTranslation } from 'react-i18next'
import { Network } from './Network'

/**
 * Renders the Hero section of the webpage.
 * @returns The Hero component.
 */
export const Hero = () => {
  const { t } = useTranslation('hero')

  return (
    <section className="w-full mt-20 px-5">
      <Container className="min-h-[75dvh] lg:min-h-[73dvh] flex flex-col justify-center items-start gap-5">
        <Badge>{t('welcomeBadge')}</Badge>
        <section className="w-full flex flex-col items-start">
          <Text className="text-lg">{t('presentation')}</Text>
          <Title as="h2" className="text-5xl lg:text-6xl font-bold text-fg">
            RamssCore
          </Title>
        </section>
        <Text className="text-lg">
          {t('role1')} <span className="text-primary-fg">{t('role2')}</span>{' '}
          {t('role3')}
        </Text>
        <Network />
      </Container>
    </section>
  )
}
