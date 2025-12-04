import { Container } from '@components/ui/Container'
import { Link } from '@components/ui/Link'
import { Text } from '@components/ui/Text'
import { Title } from '@components/ui/Title'
import { useTranslation } from 'react-i18next'

/**
 * Renders a call to action component.
 * @returns JSX.Element The call to action component.
 */
export const CallToAction = () => {
  const { t } = useTranslation('callToAction')

  return (
    <section className="w-full px-5">
      <Container className="min-h-[80svh] lg:min-h-[65svh] flex flex-col justify-center items-center text-center gap-2">
        <Title as="h3" className="text-3xl lg:text-4xl font-bold">
          {t('title')}
        </Title>
        <Text className="font-medium text-base text-muted">
          {t('description')}
        </Text>
        <Link
          href="mailto:ramsesgpm@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-6 mt-6 text-primary-bg bg-primary-fg py-2 rounded-md font-medium hover:text-primary-bg hover:brightness-110"
        >
          {t('buttonText')}
        </Link>
      </Container>
    </section>
  )
}
