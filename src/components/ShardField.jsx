import { hero } from '../content.js'

// Временные превью-картинки под осколки (Lorem Picsum, детерминированы по seed).
// Заменишь на реальные арты: подставь свой URL/путь вместо picsum. Размер —
// под пропорции осколка, большая сторона ~440px.
function previewImg(id, ratio) {
  const [rw, rh] = ratio.split('/').map((n) => parseInt(n.trim(), 10))
  const base = 440
  const w = rw >= rh ? base : Math.round((base * rw) / rh)
  const h = rh >= rw ? base : Math.round((base * rh) / rw)
  return `https://picsum.photos/seed/orbit-${id}/${w}/${h}`
}

// «Осколки» hero — полароид-рамки под арты. Раскладка-коллаж, что
// разлетается при скролле. Параллакс читает CSS-переменную --p с .hero.
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
          <img className="shard__img" src={s.img || previewImg(s.id, s.ratio)} alt="" />
          <span className="shard__cap">{s.caption}</span>
        </div>
      ))}
    </div>
  )
}
