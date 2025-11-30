import { type Language, useChangeLanguage } from '@hooks/useChangeLanguage'
import { ButtonNavbar } from './ButtonNavbar'
import { ButtonTheme } from './ButtonTheme'
import { ButtonLanguage } from './ButtonLanguage'
import { Container } from '@components/ui/Container'
import { Link } from '@components/ui/Link'
import { MobileNavbar } from './MobileNavbar'
import { Title } from '@components/ui/Title'
import { useToggle } from '@hooks/useToggle'
import { useThemeContext } from '@hooks/useThemeContext'
import { Navbar } from './Navbar'
import { useState } from 'react'

/**
 * Renders a header component with a title, theme toggle, and mobile navigation.
 * @returns The Header component.
 */
export const Header = () => {
  const { active, off, on } = useToggle()
  const { change, theme } = useThemeContext()
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('language') as Language) ?? 'en',
  )
  const { changeLanguage } = useChangeLanguage(language)

  const toggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
    changeLanguage()
  }

  return (
    <header className="w-full fixed top-0 left-0 z-100 bg-bg border-b border-muted/20 py-4 px-5">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Title className="text-2xl md:text-3xl font-semibold text-primary-fg">
            RamssCore
          </Title>
        </Link>
        <section className="flex items-center gap-3">
          <Navbar />
          <ButtonLanguage onClick={toggle} isEnglish={language === 'en'} />
          <ButtonTheme isDarkMode={theme === 'dark'} onClick={change} />
          <ButtonNavbar isOpen={active} onClick={on} />
        </section>
        <MobileNavbar active={active} onClose={off} />
      </Container>
    </header>
  )
}
