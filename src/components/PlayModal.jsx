import Modal from './Modal.jsx'
import { play } from '../content.js'
import { platformIcons, ArrowIcon } from '../Icons.jsx'

// Модалка «Играть / Предрегистрация»: выбор платформы. Ссылки ведут в сторы
// (заглушки в content.platforms). title можно переопределить под контекст CTA.
export default function PlayModal({ open, onClose, title, subtitle }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title || play.title}
      subtitle={subtitle || play.subtitle}
    >
      <div className="platform-pick">
        {play.platforms.map((p) => {
          const Icon = platformIcons[p.id]
          return (
            <a
              key={p.id}
              className="platform-pick__item"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && <Icon />}
              <span>
                <span className="platform-pick__name">{p.label}</span>
                <br />
                <span className="platform-pick__note">{p.note}</span>
              </span>
              <span className="ml-auto">
                <ArrowIcon />
              </span>
            </a>
          )
        })}
      </div>
    </Modal>
  )
}
