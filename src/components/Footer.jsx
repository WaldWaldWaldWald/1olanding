import { brand, socials, legal, footer } from '../content.js'
import { OrbitMark, socialIcons } from '../Icons.jsx'

// Футер: бренд + доступность, соцсети, легал-ссылки, возрастной рейтинг.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <span className="brand" style={{ fontSize: '1.3rem' }}>
              <span className="brand__mark">
                <OrbitMark />
              </span>
              <span>
                1<b>orbit</b>
              </span>
            </span>
            <p className="footer__avail" style={{ marginTop: '0.5rem' }}>
              {footer.availability}
            </p>
          </div>

          <nav className="footer__socials" aria-label="Соцсети">
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
          </nav>
        </div>

        <nav className="footer__legal" aria-label="Правовая информация">
          {legal.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__bottom">
          <span className="age-badge">
            <b>{footer.ageRating}</b>
            {footer.ageNote}
          </span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
