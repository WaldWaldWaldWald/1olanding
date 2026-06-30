import { useEffect } from 'react'

// Блокирует прокрутку body, пока locked=true (мобильное меню/оверлеи).
// Компенсирует ширину скроллбара, чтобы контент не «прыгал».
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return
    const { body, documentElement } = document
    const scrollbar = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPad = body.style.paddingRight
    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPad
    }
  }, [locked])
}
