import { Badge } from '@components/ui/Badge'
import { Link } from '@components/ui/Link'
import { Text } from '@components/ui/Text'
import { Title } from '@components/ui/Title'
import projects from '@data/projects.json'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { classMerger } from '@utils/classMerger'
import { useTranslation } from 'react-i18next'

type ProjectProps = (typeof projects)[number] & { description: string }

export const Project = ({
  title,
  description,
  links,
  image,
  technologies,
}: ProjectProps) => {
  const { t } = useTranslation('projects')

  return (
    <article className="w-full h-auto rounded-lg overflow-hidden border border-muted/30">
      <div className="overflow-hidden w-full max-h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
      <section className="w-full py-4 px-5 flex flex-col items-start gap-5">
        <div className="w-full flex flex-col items-start gap-2">
          <Title as="h4" className="text-xl lg:text-2xl">
            {title}
          </Title>
          <Text className="text-base font-medium">{description}</Text>
        </div>
        <section className="w-full flex items-center gap-1.5 flex-wrap">
          {technologies.map((tech) => (
            <Badge key={crypto.randomUUID()}>{tech}</Badge>
          ))}
        </section>
        <section className="w-full flex items-center gap-2 md:w-fit md:items-start md:gap-3">
          <Link
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={classMerger(
              'rounded-full border border-dark inline-flex items-center gap-2 bg-dark text-light',
              'py-2 w-full md:w-fit md:px-4 justify-center md:justify-start text-sm lg:text-base',
              'hover:text-light/95',
            )}
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            {t('view.github')}
          </Link>
          {links?.live && (
            <Link
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={classMerger(
                'w-full rounded-full border border-primary-fg text-center text-sm',
                'font-medium flex items-center justify-center gap-2 bg-transparent md:text-left lg:text-base',
                'text-primary-fg hover:bg-primary-fg hover:text-primary-bg py-2 md:w-fit md:px-4 md:justify-start',
              )}
            >
              <FontAwesomeIcon icon={faGlobe} className="text-xl" />
              {t('view.live')}
            </Link>
          )}
        </section>
      </section>
    </article>
  )
}
