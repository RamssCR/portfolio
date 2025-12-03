import { Tabs, TabsList, TabsTrigger } from '@components/ui/Tabs'
import { Container } from '@components/ui/Container'
import { Content } from './Content'

const SECTIONS = ['Web Applications', 'Desktop Applications'] as const
export type Section = (typeof SECTIONS)[number]

export const About = () => {
  return (
    <section id="about" className="w-full px-5">
      <Container className="min-h-[80vh] lg:min-h-[60vh] flex flex-col lg:justify-center">
        <Tabs defaultValue="Web Applications" className="w-full">
          <TabsList>
            {SECTIONS.map((section) => (
              <TabsTrigger
                key={section}
                value={section}
                className="hover:text-primary-fg hover:cursor-pointer"
              >
                {section}
              </TabsTrigger>
            ))}
          </TabsList>
          {SECTIONS.map((section) => (
            <Content key={section} section={section} />
          ))}
        </Tabs>
      </Container>
    </section>
  )
}
