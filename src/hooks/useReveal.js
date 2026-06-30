import { useEffect } from 'react'

// Появление блоков при прокрутке (как в obitel-estate). Навешивает класс .in
// на элементы с классом .reveal, когда они входят во вьюпорт. dep — пересканить
// при смене контента. Уважает prefers-reduced-motion (CSS отключает переход).
export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
