import { hero } from '../content.js'

// «Осколки» hero — полароид-рамки под арты. Раскладка-коллаж, что
// разлетается при скролле. Параллакс читает CSS-переменную --p с .hero.
// Каждый осколок — плейсхолдер: замени .shard__fill на <img>, когда будут арты.
export default function ShardField() {
  return (
    <div className="hero__shards" aria-hidden="true">
      {hero.shards.map((s) => (
        <div
          key={s.id}
          className="shard"
          style={{
            '--x': `${s.x}%`,
            '--y': `${s.y}%`,
            '--w': `min(${s.size}%, ${Math.round(s.size * 4)}px)`,
            '--ratio': s.ratio,
            '--rot': s.rot,
            '--depth': s.depth,
            '--dx': (s.x - 50) * 2.2,
          }}
        >
          <span className="shard__cap">{s.caption}</span>
        </div>
      ))}
    </div>
  )
}
