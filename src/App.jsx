import { useState } from 'react'
import { useReveal } from './hooks/useReveal.js'
import { features } from './content.js'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import Pillars from './components/Pillars.jsx'
import WorldSection from './components/WorldSection.jsx'
import Features from './components/Features.jsx'
import ShowcaseBreak from './components/ShowcaseBreak.jsx'
import Faq from './components/Faq.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import TrailerModal from './components/TrailerModal.jsx'
import SocialPrompt from './components/SocialPrompt.jsx'

// Издания/предзаказ — до полноэкранной вставки; видео/медиа — после неё.
const editions = features.slice(0, 2)
const mediaFeatures = features.slice(2)

// Однастраничный лендинг 1orbit. Глобальные оверлеи (меню, модалка) живут тут.
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [trailerOpen, setTrailerOpen] = useState(false)

  useReveal()

  // Единственное целевое действие сайта — предрегистрация: все primary-CTA
  // ведут к форме #preregister и фокусят поле email.
  const goPreRegister = () => {
    document.getElementById('preregister')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      document.getElementById('prereg-email')?.focus({ preventScroll: true })
    }, 500)
  }
  const openTrailer = () => setTrailerOpen(true)

  return (
    <>
      <a className="skip-link" href="#why">
        К содержимому
      </a>
      <div className="space-bg" aria-hidden="true" />

      <Header onOpenMenu={() => setMenuOpen(true)} onPreRegister={goPreRegister} />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onPreRegister={goPreRegister}
        onTrailer={openTrailer}
      />

      <main>
        <Hero onPreRegister={goPreRegister} onTrailer={openTrailer} />
        <Pillars />
        <WorldSection />
        <Features
          id="features"
          kicker="Бонусы за раннюю запись"
          title="Запишись — стартуй сильнее"
          items={editions}
          onPreRegister={goPreRegister}
        />
        <ShowcaseBreak />
        <Features
          id="videos"
          kicker="Смотри и качай"
          title="1orbit в деле"
          items={mediaFeatures}
          onTrailer={openTrailer}
        />
        <Faq />
        <Newsletter />
      </main>

      <Footer />

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
      <SocialPrompt />
    </>
  )
}
