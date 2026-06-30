import { useEffect, useRef } from 'react'
import { CloseIcon } from '../Icons.jsx'

// Доступная модалка на нативном <dialog> (паттерн из obitel-estate):
// focus-trap, инертный фон и Escape — из коробки. Закрытие по фону и крестику.
export default function Modal({ open, onClose, title, subtitle, size = 'md', bare = false, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    else if (!open && d.open) d.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onCancel = (e) => {
    e.preventDefault() // Escape → контролируемое закрытие
    onClose()
  }
  const onClick = (e) => {
    if (e.target === ref.current) onClose() // клик по фону
  }

  return (
    <dialog
      ref={ref}
      className={`modal modal--${size}`}
      onCancel={onCancel}
      onClick={onClick}
      aria-label={title}
    >
      <div className={bare ? 'modal__video' : 'modal__inner'}>
        <button type="button" className="modal__close" onClick={onClose} aria-label="Закрыть">
          <CloseIcon />
        </button>
        {!bare && title && <h2 className="modal__title">{title}</h2>}
        {!bare && subtitle && <p className="modal__sub">{subtitle}</p>}
        {children}
      </div>
    </dialog>
  )
}
