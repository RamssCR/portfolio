import { Container } from '@components/ui/Container'
import { Experience } from './Experience'
import { Title } from '@components/ui/Title'
import experiences from '@data/experience.json'
import { useTranslation } from 'react-i18next'

/**
 * Experiences Section Component.
 * It displays a list of professional experiences.
 * @returns A React component rendering the experiences section.
 */
export const Experiences = () => {
  const { t } = useTranslation()

  return (
    <section id="experience" className="w-full px-5">
      <Container className="min-h-[65dvh] lg:min-h-[50dvh]">
        <Title as="h3" className="text-3xl lg:text-4xl font-bold">
          {t('titles.experience')}
        </Title>
        <section className="w-full flex flex-col items-start">
          {experiences.map((experience) => (
            <Experience key={experience.id} {...experience} />
          ))}
        </section>
      </Container>
    </section>
  )
}
