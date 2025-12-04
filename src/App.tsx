import { About } from '@components/about/About'
import { CallToAction } from '@components/call-to-action/CallToAction'
import { Experiences } from '@components/experiences/Experiences'
import { Footer } from '@components/footer/Footer'
import { Header } from '@components/header/Header'
import { Hero } from '@components/hero/Hero'
import { Projects } from '@components/projects/Projects'

/**
 * Renders the main application component.
 * It includes the Header, Hero, About, Projects, Experiences, and Footer components.
 * @returns JSX.Element The rendered App component.
 */
export const App = () => {
  return (
    <main className="w-full relative min-h-svh flex flex-col gap-4 items-start">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <CallToAction />
      <Footer />
    </main>
  )
}
