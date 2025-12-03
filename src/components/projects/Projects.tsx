import { Container } from '@components/ui/Container'
import { Project } from './Project'
import { Title } from '@components/ui/Title'
import projects from '@data/projects.json'
import { useTranslation } from 'react-i18next'

export const Projects = () => {
  const { t } = useTranslation()
  const { t: tProject } = useTranslation('projects')

  return (
    <section id="projects" className="w-full px-5 py-8 lg:py-16">
      <Container className="flex flex-col items-start gap-6 min-h-[80dvh] lg:min-h-[70dvh]">
        <Title as="h3" className="text-3xl lg:text-4xl">
          {t('titles.projects')}
        </Title>
        <section className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Project
              key={project.id}
              {...project}
              description={tProject(project.id)}
            />
          ))}
        </section>
      </Container>
    </section>
  )
}
