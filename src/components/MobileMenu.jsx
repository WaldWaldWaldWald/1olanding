import { useEffect, useRef } from 'react'
import { nav, socials, hero } from '../content.js'
import { OrbitMark, CloseIcon, socialIcons } from '../Icons.jsx'
import { useScrollLock } from '../hooks/useScrollLock.js'

// Полноэкранное мобильное меню: lock body-scroll, Escape, фокус на первую
// ссылку при открытии. Закрывается по ссылке, крестику и Escape.
export default function MobileMenu({ open, onClose, onPreRegister, onTrailer }) {
  const firstLink = useRef(null)
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstLink.current?.focus(), 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      clearTimeout(t)
    }
  }, [open, onClose])

  return (
    <div className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="container menu__top">
        <span className="menu__lang" aria-label="Язык интерфейса: русский">
          Русский
        </span>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Закрыть меню">
          <CloseIcon />
        </button>
      </div>

      <div className="container menu__brandline" aria-hidden="true">
        <span className="brand">
          <span className="brand__mark">
            <OrbitMark />
          </span>
          <span>
            1<b>orbit</b>
          </span>
        </span>
        <span className="menu__brandline-sep" />
        <span className="menu__brandline-sub">PvPvE космо-MMO</span>
      </div>

      <nav className="container menu__links" aria-label="Меню">
        <a href="#top" aria-current="page" ref={firstLink} onClick={onClose}>
          Главная
        </a>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="container menu__cta">
        <button
          type="button"
          className="btn btn--nebula btn--lg btn--block"
          onClick={() => {
            onClose()
            onPreRegister()
          }}
        >
          {hero.primaryCta}
        </button>
        <button
          type="button"
          className="btn btn--ghost btn--lg btn--block"
          onClick={() => {
            onClose()
            onTrailer()
          }}
        >
          {hero.secondaryCta}
        </button>

        <div className="menu__social">
          {socials.map((s) => {
            const Icon = socialIcons[s.id]
            return (
              <a
                key={s.id}
                className="social-btn"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon ? <Icon /> : s.label[0]}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
