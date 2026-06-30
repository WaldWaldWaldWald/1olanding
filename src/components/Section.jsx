// Простая обёртка секции: общий ритм отступов + опциональная «шапка»
// (kicker / заголовок / лид). Контент — внутри .container.
export default function Section({ id, kicker, title, lead, className = '', children }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="container">
        {(kicker || title || lead) && (
          <header className="section__head reveal">
            {kicker && <p className="kicker">{kicker}</p>}
            {title && <h2 className="section__title">{title}</h2>}
            {lead && <p className="section__lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
