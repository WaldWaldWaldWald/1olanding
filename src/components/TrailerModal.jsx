import Modal from './Modal.jsx'
import ArtFrame from './ArtFrame.jsx'

// Видео-модалка трейлера. Сейчас внутри плейсхолдер-рамка 16:9 —
// замени её на <video controls autoPlay src="...">, когда будет ролик.
export default function TrailerModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} size="wide" bare title="Геймплейный трейлер">
      <ArtFrame caption="Видео-трейлер 1orbit · вставь сюда ролик" ratio="16 / 9" />
    </Modal>
  )
}
