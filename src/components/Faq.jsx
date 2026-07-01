import { faq } from '../content.js'
import Section from './Section.jsx'
import { ChevronDownIcon } from '../Icons.jsx'

// FAQ на нативном <details>/<summary>: доступно (клавиатура, screen reader,
// раскрытие без JS) из коробки. Снимает возражения прямо перед формой.
export default function Faq() {
  return (
    <Section id={faq.id} kicker={faq.kicker} title={faq.title}>
      <div className="faq">
        {faq.items.map((item, i) => (
          <details className="faq__item reveal" key={i} style={{ '--reveal-delay': `${(i % 3) * 60}ms` }}>
            <summary className="faq__q">
              <span>{item.q}</span>
              <ChevronDownIcon />
            </summary>
            <p className="faq__a">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
