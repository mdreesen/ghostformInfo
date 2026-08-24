<script setup lang="ts">
/**
 * The hero's second 3D layer, distinct from the terrain in both technique and
 * purpose: the terrain is atmosphere (canvas, wireframe, background); this is
 * product (real CSS 3D transforms, showing an actual briefing card stack).
 *
 * A realtor's first three seconds on the site should show them the thing
 * they're getting, not just abstract art — so this floats real "lead card"
 * mockups, tilted in true 3D perspective, that respond to the cursor like a
 * physical object sitting on the page. Pure CSS 3D (perspective + rotateX/Y +
 * translateZ) — no canvas, no library — so it's genuinely a different
 * construction method from the terrain, not a reskin of it.
 */
const wrap = ref<HTMLElement | null>(null)
const rx = ref(0)   // rotateX from pointer
const ry = ref(0)   // rotateY from pointer
const scrollPush = ref(0)

function onMove(e: MouseEvent) {
  const el = wrap.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5   // -0.5 .. 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  ry.value = px * 16     // left/right tilt
  rx.value = -py * 12    // up/down tilt
}
function onLeave() {
  ry.value = 0
  rx.value = 0
}

let raf = 0
function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    const el = wrap.value
    if (!el) return
    const r = el.getBoundingClientRect()
    // 0 at top of viewport entry, 1 once scrolled well past — pushes the
    // stack deeper and lets it drift as the hero scrolls by.
    scrollPush.value = Math.min(1, Math.max(0, (0 - r.top) / (r.height || 1)))
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    ref="wrap"
    class="hero-cards"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div
      class="stack"
      :style="{
        transform: `rotateX(${8 + rx}deg) rotateY(${-10 + ry}deg) translateZ(${-scrollPush * 140}px) translateY(${scrollPush * 60}px)`
      }"
    >
      <!-- Back card: cold lead, faded further back -->
      <div class="card back">
        <div class="row">
          <span class="dot faint" />
          <div class="meta">
            <p class="name">Jamie Ruiz</p>
            <p class="reason">No contact in 21 days</p>
          </div>
        </div>
      </div>

      <!-- Middle card: new lead -->
      <div class="card mid">
        <div class="row">
          <span class="dot hollow" />
          <div class="meta">
            <p class="name">Tom Reed</p>
            <p class="reason">New lead — reach out today</p>
          </div>
        </div>
      </div>

      <!-- Front card: overdue, the one that matters most, fully in focus -->
      <div class="card front">
        <p class="eyebrow">№ 0142 · Overdue</p>
        <p class="name lg">Sarah Chen</p>
        <p class="reason">Follow-up scheduled 2 days ago · $425,000 · Spring</p>
        <div class="actions">
          <span class="btn ghost">Draft</span>
          <span class="btn solid">Contacted</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-cards {
  position: relative;
  perspective: 1600px;
  width: 100%;
  max-width: 380px;
  height: 340px;
  margin-left: auto;
}

.stack {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
}

.card {
  position: absolute;
  left: 0; right: 0;
  background: #F7F4EF;
  border: 1px solid #DDD6C9;
  box-shadow: 0 30px 60px -20px rgba(31, 27, 22, 0.18);
  padding: 20px 22px;
}

.card.back {
  top: -6px;
  transform: translateZ(-70px) translateX(26px) scale(0.94);
  opacity: 0.55;
}
.card.mid {
  top: 26px;
  transform: translateZ(-30px) translateX(13px) scale(0.97);
  opacity: 0.8;
}
.card.front {
  top: 70px;
  transform: translateZ(20px);
  box-shadow: 0 40px 80px -18px rgba(31, 27, 22, 0.28);
}

.row { display: flex; align-items: center; gap: 12px; }
.dot { width: 8px; height: 8px; flex-shrink: 0; background: #B5563A; }
.dot.hollow { background: transparent; border: 1.5px solid #C9866F; }
.dot.faint { background: #A9A39A; }

.meta .name { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 15px; color: #1F1B16; }
.meta .reason { font-size: 11.5px; color: #8A847C; margin-top: 1px; }

.eyebrow {
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #B5563A; font-weight: 700; margin-bottom: 10px;
}
.name.lg { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 21px; color: #1F1B16; margin-bottom: 6px; }
.card.front .reason { font-size: 12.5px; color: #8A847C; margin-bottom: 18px; }

.actions { display: flex; gap: 8px; }
.btn {
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700;
  padding: 8px 14px; border: 1px solid #DDD6C9; color: #8A847C;
}
.btn.solid { background: #B5563A; border-color: #B5563A; color: #F7F4EF; }

@media (max-width: 900px) {
  .hero-cards { margin: 40px auto 0; max-width: 340px; }
}

@media (prefers-reduced-motion: reduce) {
  .stack { transition: none; }
}
</style>
