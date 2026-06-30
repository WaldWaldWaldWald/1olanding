import { features } from '../content.js'
import Section from './Section.jsx'
import FeatureCard from './FeatureCard.jsx'

// Сетка фич-карточек. Широкие (16:9) карточки занимают всю ширину ряда,
// создавая ритм как в оригинале. Якорь #features + #trailer/#media внутри.
export default function Features({ onTrailer }) {
  return (
    <Section id="features" kicker="Что внутри" title="Собери орбиту под себя">
      <div className="features">
        {features.map((f, i) => {
          const wide = f.art.ratio.startsWith('16')
          return (
            <FeatureCard
              key={f.id}
              id={f.id}
              feature={f}
              wide={wide}
              onTrailer={onTrailer}
              style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}
            />
          )
        })}
      </div>
    </Section>
  )
}
