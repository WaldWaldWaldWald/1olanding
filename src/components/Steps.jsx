import { steps } from '../content.js'
import Section from './Section.jsx'

// «Как играть» — 3 нумерованных шага. Делает суть игры понятной сразу,
// до погружения в детали мира. Идёт следом за hero.
export default function Steps() {
  return (
    <Section id={steps.id} kicker={steps.kicker} title={steps.title}>
      <ol className="steps">
        {steps.items.map((s, i) => (
          <li className="step reveal" key={s.n} style={{ '--reveal-delay': `${i * 90}ms` }}>
            <span className="step__n">{s.n}</span>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
