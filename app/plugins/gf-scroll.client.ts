/**
 * ============================================================================
 * GHOSTFORM SCROLL ENGINE
 * ============================================================================
 * Drives everything in assets/css/scroll-3d.css. Two jobs:
 *
 *   1. One-shot reveals — adds `.is-in` to any `[class*="gf-anim"]` element
 *      when it scrolls into view.
 *   2. Continuous motion — writes a live `--p` progress value (-1 .. 1) to
 *      `.gf-drift` / `.gf-swivel` / `.gf-push` elements every frame.
 *
 * NO VUE DIRECTIVES. The previous implementation used a `v-tilt` directive,
 * which crashed SSR because Vue's server renderer resolves every directive in
 * a template and reads `.getSSRProps` off it. This file only ever touches the
 * DOM on the client, so that entire class of failure is gone.
 *
 * Safe on: SSR (returns early), reduced-motion (reveals everything instantly,
 * skips continuous motion), touch devices (skips continuous motion to save
 * battery), and late-mounting content (MutationObserver picks it up).
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  const coarse = window.matchMedia?.('(pointer: coarse)')?.matches ?? false

  const ANIM = '[class*="gf-anim"]:not(.is-in)'
  const CONT = '.gf-drift, .gf-swivel, .gf-push'

  /* ---------------------------------------------------------------- reveal */
  let io: IntersectionObserver | null = null

  function getObserver() {
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-in')
            io?.unobserve(entry.target)
          }
        },
        // Fires slightly before the element is fully visible, so the motion
        // is already underway by the time it's properly in frame.
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )
    }
    return io
  }

  function track(el: HTMLElement) {
    if (el.classList.contains('is-in') || el.dataset.gfSeen) return
    el.dataset.gfSeen = '1'

    if (reduced) {
      el.classList.add('is-in')
      return
    }

    // Anything already on screen at load reveals on the next frame rather
    // than waiting for a scroll event that may never come (short pages,
    // deep links, refreshing halfway down).
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0 && r.height > 0) {
      requestAnimationFrame(() => el.classList.add('is-in'))
      return
    }

    getObserver().observe(el)
  }

  function scanReveals(root: ParentNode = document) {
    root.querySelectorAll<HTMLElement>(ANIM).forEach(track)
  }

  /* ------------------------------------------------------------ continuous */
  let items: HTMLElement[] = []
  let ticking = false

  function collect() {
    items = Array.from(document.querySelectorAll<HTMLElement>(CONT))
  }

  function update() {
    ticking = false
    const vh = window.innerHeight

    for (const el of items) {
      const r = el.getBoundingClientRect()
      // Skip anything well off screen — no point computing for it.
      if (r.bottom < -vh * 0.4 || r.top > vh * 1.4) continue

      // -1 when the element's centre sits at the bottom of the viewport,
      // 0 at centre, +1 at the top. Clamped so a fast scroll or a very tall
      // element can't drive the transform to an absurd value.
      const centre = r.top + r.height / 2
      const p = Math.max(-1, Math.min(1, (vh / 2 - centre) / (vh / 2)))
      el.style.setProperty('--p', p.toFixed(4))
    }
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  /* ----------------------------------------------------------------- setup */
  function start() {
    scanReveals()

    // Continuous motion is a real cost on phones for an effect nobody
    // notices mid thumb-scroll, so it's desktop-only.
    if (!reduced && !coarse) {
      collect()
      update()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }

    // Catch anything that mounts later — client-only sections, route
    // changes, lazily fetched content. Without this, a block behind a v-if
    // would sit at opacity:0 forever.
    const mo = new MutationObserver(() => {
      scanReveals()
      if (!reduced && !coarse) { collect(); onScroll() }
    })
    mo.observe(document.body, { childList: true, subtree: true })
  }

  nuxtApp.hook('app:mounted', () => nextTick(start))
  nuxtApp.hook('page:finish', () => nextTick(() => {
    scanReveals()
    if (!reduced && !coarse) { collect(); onScroll() }
  }))

  // Safety net for slow first paints.
  setTimeout(() => scanReveals(), 700)
  setTimeout(() => scanReveals(), 2200)
})
