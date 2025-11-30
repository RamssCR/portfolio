import { About } from '@components/about/About'
import { Footer } from '@components/footer/Footer'
import { Header } from '@components/header/Header'
import { Hero } from '@components/hero/Hero'

export const App = () => {
  return (
    <main className="w-full relative min-h-dvh flex flex-col gap-4 items-start">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}
