import { useEffect } from 'react'

// true, если пользователь просит уменьшить движение.
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Scroll-driven параллакс для hero-«осколков». Пишет CSS-переменную --p
// (прогресс ухода hero за экран, 0 → ~1.4) прямо в DOM через requestAnimationFrame,
// чтобы не дёргать React на каждом кадре скролла. CSS-трансформы осколков читают --p.
// Возвращать ничего не нужно — вешаем на ref секции.
export function useParallax(ref, { disabled = false } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el || disabled) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const h = Math.max(rect.height, 1)
      // 0 пока верх hero на месте; 1 когда прокрутили на высоту hero вверх.
      const p = Math.min(Math.max(-rect.top / h, 0), 1.4)
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref, disabled])
}
