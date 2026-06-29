import { useEffect } from 'react'

export default function useScrollReveal(selector = '.reveal', options = {}) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) return

    const els = document.querySelectorAll(selector)
    const staggerParents = document.querySelectorAll('.reveal-stagger')
    const all = [...els, ...(staggerParents.length ? [...staggerParents].flatMap(p => [...p.children]) : [])]

    if (!all.length) return

    const stagger = options.stagger || 80
    const threshold = options.threshold || 0.18
    const rootMargin = options.rootMargin || '0px 0px -10% 0px'

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.stagger
              ? parseInt(entry.target.dataset.stagger) * stagger
              : 0
            entry.target.style.transition =
              `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,` +
              `transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`
            requestAnimationFrame(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            })
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    all.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selector])
}
