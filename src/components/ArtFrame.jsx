import { PlusIcon, PlayIcon } from '../Icons.jsx'

// Плейсхолдер под арт пользователя. Когда будут реальные изображения —
// замени содержимое на <img src=... alt=caption />, классы рамки оставь.
// ratio — пропорции ('4 / 3', '16 / 9'); play — показать кнопку-плей (видео).
export default function ArtFrame({ caption, ratio = '4 / 3', play = false, onPlay }) {
  const ratioLabel = ratio.replace(/\s/g, '')
  return (
    <div className="artframe" style={{ '--ratio': ratio }} aria-label={caption} role="img">
      <span className="artframe__ratio">{ratioLabel}</span>

      <div className="artframe__inner">
        {!play && (
          <span className="artframe__plus" aria-hidden="true">
            <PlusIcon />
          </span>
        )}
        <span className="artframe__cap">{caption}</span>
      </div>

      {play && (
        <div className="artframe__play">
          <button type="button" className="play-btn" onClick={onPlay} aria-label="Смотреть трейлер">
            <PlayIcon />
          </button>
        </div>
      )}
    </div>
  )
}
