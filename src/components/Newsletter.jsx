import { useState } from 'react'
import { newsletter } from '../content.js'
import { MailIcon, CheckIcon } from '../Icons.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Форма подписки (клиентская): валидация email + success-состояние.
// Реальную отправку подключишь в onSubmit (fetch на свой эндпоинт).
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError(newsletter.error)
      return
    }
    setError('')
    setDone(true)
    // TODO: отправка на бэкенд/рассылку
  }

  return (
    <section className="section" id={newsletter.id}>
      <div className="container">
        <div className="newsletter reveal">
          <p className="kicker">{newsletter.kicker}</p>
          <h2 className="newsletter__title">{newsletter.title}</h2>
          <p className="newsletter__body">{newsletter.body}</p>

          <ul className="newsletter__benefits">
            {newsletter.benefits.map((b) => (
              <li className="newsletter__benefit" key={b}>
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>

          {done ? (
            <div className="newsletter__success" role="status">
              <CheckIcon />
              {newsletter.success}
            </div>
          ) : (
            <>
              <form className="newsletter__form" onSubmit={onSubmit} noValidate>
                <label className="field">
                  <MailIcon />
                  <input
                    id="prereg-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder={newsletter.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label={newsletter.placeholder}
                    aria-invalid={!!error}
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--lg">
                  {newsletter.cta}
                </button>
              </form>
              {error && <p className="field-error">{error}</p>}
              <p className="newsletter__consent">{newsletter.consent}</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
