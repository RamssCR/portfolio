import type { Section } from './About'
import { TabsContent } from '@components/ui/Tabs'
import { Text } from '@components/ui/Text'
import { Title } from '@components/ui/Title'
import technologies from '@data/technologies.json'
import { useTranslation } from 'react-i18next'

/**
 * Content component for the About section.
 * @param props - Component props
 * @param props.section - The section to display content for.
 * @returns A card component with section content.
 */
export const Content = ({ section }: { section: Section }) => {
  const { t } = useTranslation('about')

  return (
    <TabsContent
      key={section}
      value={section}
      className="w-full grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-6 xl:gap-x-8 py-4"
    >
      <section className="w-full flex flex-col items-start gap-4 lg:col-span-3">
        <Title as="h3" className="text-3xl lg:text-4xl font-bold">
          {t('title')}
        </Title>
        {t(`${section}.about`)
          .split('@')
          .map((paragraph) => (
            <Text key={crypto.randomUUID()} className="text-base lg:text-lg">
              {paragraph.trim()}
            </Text>
          ))}
      </section>
      <section className="w-full flex flex-col items-start gap-4 lg:col-span-2">
        <Title
          as="h3"
          className="text-fg/70 border-b-3 border-b-fg/70 uppercase text-lg font-medium px-2"
        >
          {t('skills')}
        </Title>
        <ul className="w-full grid grid-cols-2 gap-y-4 gap-x-4">
          {technologies[section].map((tech) => (
            <li
              key={tech}
              className="text-fg border border-muted/45 rounded-lg py-3 block w-full hover:border-primary-fg hover:text-primary-fg text-center transition-colors font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </TabsContent>
  )
}
