import { useEffect, useState } from 'react'
import { socials, socialPrompt } from '../content.js'
import { socialIcons, CloseIcon } from '../Icons.jsx'

// Промо-окно соцсетей. Всплывает при прокрутке вниз (один раз за визит).
// «Позже» → скрыть до следующего захода (sessionStorage).
// «Не интересно» → больше никогда (localStorage).
const NEVER_KEY = 'orbit:social:never'
const LATER_KEY = 'orbit:social:later'
const TRIGGER = 1.3 // экранов прокрутки до показа

const read = (store, key) => {
  try {
    return window[store].getItem(key)
  } catch {
    return null
  }
}
const write = (store, key) => {
  try {
    window[store].setItem(key, '1')
  } catch {
    /* приватный режим — просто скрываем на сессию в памяти */
  }
}

export default function SocialPrompt() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (read('localStorage', NEVER_KEY) || read('sessionStorage', LATER_KEY)) return
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * TRIGGER) {
        setOpen(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && later()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const later = () => {
    write('sessionStorage', LATER_KEY)
    setOpen(false)
  }
  const never = () => {
    write('localStorage', NEVER_KEY)
    setOpen(false)
  }

  return (
    <aside
      className={`social-prompt${open ? ' is-open' : ''}`}
      role="dialog"
      aria-label={socialPrompt.title}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="social-prompt__close"
        onClick={later}
        aria-label="Закрыть — напомнить позже"
        tabIndex={open ? 0 : -1}
      >
        <CloseIcon />
      </button>

      <p className="social-prompt__kicker">{socialPrompt.kicker}</p>
      <h3 className="social-prompt__title">{socialPrompt.title}</h3>
      <p className="social-prompt__text">{socialPrompt.body}</p>

      <div className="social-prompt__socials">
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
              tabIndex={open ? 0 : -1}
            >
              {Icon ? <Icon /> : s.label[0]}
            </a>
          )
        })}
      </div>

      <div className="social-prompt__actions">
        <button type="button" className="btn btn--primary btn--block" onClick={later} tabIndex={open ? 0 : -1}>
          {socialPrompt.later}
        </button>
        <button type="button" className="social-prompt__never" onClick={never} tabIndex={open ? 0 : -1}>
          {socialPrompt.never}
        </button>
      </div>
    </aside>
  )
}
