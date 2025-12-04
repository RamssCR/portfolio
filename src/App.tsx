import { About } from '@components/about/About'
import { Experiences } from '@components/experiences/Experiences'
import { Footer } from '@components/footer/Footer'
import { Header } from '@components/header/Header'
import { Hero } from '@components/hero/Hero'
import { Projects } from '@components/projects/Projects'

export const App = () => {
  return (
    <main className="w-full relative min-h-dvh flex flex-col gap-4 items-start">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </main>
  )
}
