import { useEffect, useState } from 'react'
import { brand, nav } from '../content.js'
import { OrbitMark, MenuIcon } from '../Icons.jsx'

// Липкий хедер: на скролле появляется фон/блюр (.is-scrolled). CTA остаётся
// всегда. На десктопе — навигация по якорям; на мобильном — бургер.
export default function Header({ onOpenMenu, onPlay }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label={`${brand.name} — на главную`}>
          <span className="brand__mark">
            <OrbitMark />
          </span>
          <span>
            1<b>orbit</b>
          </span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="btn btn--primary" onClick={onPlay}>
            Играть бесплатно
          </button>
          <button
            type="button"
            className="icon-btn burger"
            onClick={onOpenMenu}
            aria-label="Открыть меню"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
