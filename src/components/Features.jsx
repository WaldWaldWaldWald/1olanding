import { features as allFeatures } from '../content.js'
import Section from './Section.jsx'
import FeatureCard from './FeatureCard.jsx'

// Сетка фич-карточек. Широкие (16:9) карточки занимают всю ширину ряда,
// создавая ритм как в оригинале. items/id/kicker/title параметризуемы —
// чтобы разбить карточки на группы вокруг полноэкранной арт-вставки.
export default function Features({
  items = allFeatures,
  id = 'features',
  kicker = 'Что внутри',
  title = 'Собери орбиту под себя',
  onTrailer,
  onPreRegister,
}) {
  return (
    <Section id={id} kicker={kicker} title={title}>
      <div className="features">
        {items.map((f, i) => {
          const wide = f.art.ratio.startsWith('16')
          return (
            <FeatureCard
              key={f.id}
              id={f.id}
              feature={f}
              wide={wide}
              onTrailer={onTrailer}
              onPreRegister={onPreRegister}
              style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}
            />
          )
        })}
      </div>
    </Section>
  )
}
