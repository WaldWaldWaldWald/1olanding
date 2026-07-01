import { pillars } from '../content.js'
import Section from './Section.jsx'
import { CheckIcon } from '../Icons.jsx'

// Ключевые преимущества (УТП) — главный продающий блок сразу после hero:
// без лагов, без ботов, без pay-to-win. Тот же 3-карточный ритм.
export default function Pillars() {
  return (
    <Section id={pillars.id} kicker={pillars.kicker} title={pillars.title}>
      <ul className="pillars">
        {pillars.items.map((p, i) => (
          <li className="pillar reveal" key={p.key} style={{ '--reveal-delay': `${i * 90}ms` }}>
            <span className="pillar__badge" aria-hidden="true">
              <CheckIcon />
            </span>
            <h3 className="pillar__title">{p.title}</h3>
            <p className="pillar__body">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
