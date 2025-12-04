import { Text } from '@components/ui/Text'
import { Title } from '@components/ui/Title'
import experience from '@data/experience.json'
import { useTranslation } from 'react-i18next'

type ExperienceProps = (typeof experience)[number]

/**
 * Displays a single professional experience.
 * @param props - Experience properties.
 * @returns A React component rendering a professional experience.
 */
export const Experience = ({
  id,
  company,
  location,
  startYear,
}: ExperienceProps) => {
  const { t } = useTranslation('experience')
  const bulletPoints = t(`${id}.description`).split('@')

  return (
    <article className="py-4 w-full flex flex-col items-start border-b border-muted/30 last:border-0">
      <section className="w-full flex items-center justify-between">
        <Title as="h4" className="text-lg text-primary-fg lg:text-xl">
          {t(`${id}.title`)}
        </Title>
        <Text className="text-muted text-base font-medium">
          {startYear} - {t(`${id}.endYear`)}
        </Text>
      </section>
      <section className="w-full flex items-center justify-between">
        {[company, location].map((item) => (
          <Text key={item} className="text-base font-medium">
            {item}
          </Text>
        ))}
      </section>
      <section className="mt-6 w-full flex flex-col items-start gap-2">
        {bulletPoints.map((point) => (
          <Text key={crypto.randomUUID()} className="text-base">
            {point}
          </Text>
        ))}
      </section>
    </article>
  )
}
