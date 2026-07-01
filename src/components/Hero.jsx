import { useRef } from 'react'
import { hero, platforms } from '../content.js'
import { platformIcons, ChevronDownIcon } from '../Icons.jsx'
import ShardField from './ShardField.jsx'
import { useParallax, prefersReducedMotion } from '../hooks/useParallax.js'

// Hero: фон-осколки с параллаксом + лого-локап, тэглайн, CTA и платформы.
export default function Hero({ onPreRegister, onTrailer }) {
  const ref = useRef(null)
  useParallax(ref, { disabled: prefersReducedMotion() })

  return (
    <section className="hero" id="top" ref={ref}>
      <ShardField />
      <div className="hero__veil" />

      <div className="container hero__content">
        <span className="hero__eyebrow">
          <span className="dot" />
          {hero.eyebrow}
        </span>

        <h1 className="hero__logo">{hero.title}</h1>
        <p className="hero__tagline">{hero.tagline}</p>
        <p className="hero__lead">{hero.lead}</p>

        <div className="hero__cta">
          <button type="button" className="btn btn--nebula btn--lg" onClick={onPreRegister}>
            {hero.primaryCta}
          </button>
          <button type="button" className="btn btn--ghost btn--lg" onClick={onTrailer}>
            {hero.secondaryCta}
          </button>
        </div>

        <p className="hero__assurance">{hero.assurance}</p>

        <div className="hero__best">
          <span className="hero__best-label">{hero.bestOn}</span>
          <div className="platforms">
            {platforms.map((p) => {
              const Icon = platformIcons[p.id]
              return (
                <span className="platforms__item" key={p.id}>
                  {Icon && <Icon />}
                  {p.label}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>{hero.scrollHint}</span>
        <ChevronDownIcon />
      </div>
    </section>
  )
}
