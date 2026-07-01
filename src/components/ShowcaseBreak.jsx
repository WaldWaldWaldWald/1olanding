import ArtFrame from './ArtFrame.jsx'
import { showcase } from '../content.js'

// Полноэкранная арт-вставка-разделитель (плейсхолдер под ключевой арт).
// Разграничивает блок изданий и блок видео/медиа — как full-bleed арт-вставки
// оригинала. Идёт на всю ширину вьюпорта (вне .container).
export default function ShowcaseBreak() {
  return (
    <section className="showcase reveal" aria-label={showcase.caption}>
      <ArtFrame caption={showcase.caption} fill />
      <div className="showcase__overlay">
        <p className="kicker">{showcase.eyebrow}</p>
        <p className="showcase__title">{showcase.title}</p>
      </div>
    </section>
  )
}
