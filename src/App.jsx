import { useState } from 'react'
import { useReveal } from './hooks/useReveal.js'
import { play as playContent, features } from './content.js'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import WorldSection from './components/WorldSection.jsx'
import Features from './components/Features.jsx'
import ShowcaseBreak from './components/ShowcaseBreak.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import TrailerModal from './components/TrailerModal.jsx'
import PlayModal from './components/PlayModal.jsx'

// Издания/предзаказ — до полноэкранной вставки; видео/медиа — после неё.
const editions = features.slice(0, 2)
const mediaFeatures = features.slice(2)

// Однастраничный лендинг 1orbit. Глобальные оверлеи (меню, модалки) живут тут.
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [trailerOpen, setTrailerOpen] = useState(false)
  const [playModal, setPlayModal] = useState(null) // null | { title?, subtitle? }

  useReveal()

  const openPlay = () => setPlayModal({})
  const openPreRegister = () =>
    setPlayModal({
      title: 'Предрегистрация',
      subtitle: 'Оставь платформу и почту — позовём на ближайший тест и начислим награды.',
    })

  return (
    <>
      <a className="skip-link" href="#world">
        К содержимому
      </a>
      <div className="space-bg" aria-hidden="true" />

      <Header onOpenMenu={() => setMenuOpen(true)} onPlay={openPlay} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onPlay={openPlay} />

      <main>
        <Hero onPlay={openPlay} onPreRegister={openPreRegister} />
        <WorldSection />
        <Features
          id="features"
          kicker="Что внутри"
          title="Собери орбиту под себя"
          items={editions}
        />
        <ShowcaseBreak />
        <Features
          id="videos"
          kicker="Смотри и качай"
          title="Видео и материалы"
          items={mediaFeatures}
          onTrailer={() => setTrailerOpen(true)}
        />
        <Newsletter />
      </main>

      <Footer />

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
      <PlayModal
        open={!!playModal}
        onClose={() => setPlayModal(null)}
        title={playModal?.title || playContent.title}
        subtitle={playModal?.subtitle || playContent.subtitle}
      />
    </>
  )
}
