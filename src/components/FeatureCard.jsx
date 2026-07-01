import ArtFrame from './ArtFrame.jsx'
import { ArrowIcon } from '../Icons.jsx'

// Карточка фичи: медиа-рамка (плейсхолдер под арт) + текст и CTA.
// kind==='trailer' → кнопка открывает видео-модалку; href → ссылка; иначе кнопка.
export default function FeatureCard({ feature, wide = false, onTrailer, style, id }) {
  const { kicker, title, body, cta, accent, kind, href, art } = feature
  const isTrailer = kind === 'trailer'

  const ctaNode = isTrailer ? (
    <button type="button" className="btn card__btn" onClick={onTrailer}>
      {cta} <ArrowIcon />
    </button>
  ) : (
    <a className="btn card__btn" href={href || '#'}>
      {cta} <ArrowIcon />
    </a>
  )

  return (
    <article
      id={id}
      className={`card reveal${wide ? ' card--wide' : ''}`}
      data-accent={accent}
      style={style}
    >
      <div className="card__media">
        <ArtFrame caption={art.caption} ratio={art.ratio} play={isTrailer} onPlay={onTrailer} />
      </div>
      <div className="card__body">
        <p className="card__kicker">{kicker}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{body}</p>
        <div className="card__cta">{ctaNode}</div>
      </div>
    </article>
  )
}
