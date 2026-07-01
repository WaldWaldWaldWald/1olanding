import { world } from '../content.js'
import ArtFrame from './ArtFrame.jsx'
import { CheckIcon, ArrowIcon } from '../Icons.jsx'

// Секция «Мир» (аналог story-блока оригинала): крупная медиа-рамка + текст,
// буллеты ключевых механик мира и CTA.
export default function WorldSection() {
  return (
    <section className="section" id={world.id}>
      <div className="container world">
        <div className="world__media reveal">
          {world.art.video ? (
            <video
              className="world__video"
              src={world.art.video}
              poster={world.art.poster || undefined}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <ArtFrame caption={world.art.caption} ratio={world.art.ratio} video />
          )}
        </div>

        <div className="world__text reveal" style={{ '--reveal-delay': '90ms' }}>
          <p className="kicker">{world.kicker}</p>
          <h2 className="section__title world__title nebula-text">{world.title}</h2>
          <p className="section__lead">{world.body}</p>

          <ul className="world__bullets">
            {world.bullets.map((b) => (
              <li key={b}>
                <CheckIcon />
                {b}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'var(--space-md)' }}>
            <a className="btn btn--ghost" href="#preregister">
              {world.cta} <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
