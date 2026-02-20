/* ============================================================
   INTERNATIONAL WOMEN'S DAY — 8 MARCH
   Particle system, screen transitions, animations
   ============================================================ */

'use strict';

// ── 1. CONFIG ───────────────────────────────────────────────

const isMobile = window.innerWidth < 600;

const CONFIG = {
  PETAL_COUNT:             isMobile ? 14  : 28,
  CONFETTI_COUNT:          isMobile ? 50  : 120,
  HEART_COUNT:             isMobile ? 8   : 14,
  BUTTERFLY_COUNT:         isMobile ? 0   : 5,
  GLITTER_COUNT:           isMobile ? 35  : 80,
  SHOOTING_STAR_INTERVAL:  isMobile ? 4000 : 2500,
  RING_COUNT:              3,
  FIREWORK_INTERVAL_INIT:  1000,
  FIREWORK_INTERVAL_AMB:   2800,
  MAX_BURST:               isMobile ? 200 : 450,
};

// ── 2. 30 WISH VARIATIONS ────────────────────────────────────

const WISHES = [
  {
    lines: [
      "You are the light that makes the world more beautiful.",
      "Your strength, your kindness, your brilliance —",
      "they inspire everyone around you.",
      "Today, and every day, you deserve to be celebrated."
    ]
  },
  {
    lines: [
      "The world blooms a little brighter wherever you walk.",
      "In your eyes lives a universe of stories,",
      "in your hands the power to shape tomorrow.",
      "Happy Women's Day — you are extraordinary."
    ]
  },
  {
    lines: [
      "You were born to leave the world forever changed.",
      "Your voice matters, your dreams matter,",
      "your beautiful, brilliant, unstoppable self matters.",
      "Today is yours — celebrate every magnificent inch of it."
    ]
  },
  {
    lines: [
      "Like the sun, you rise every single morning",
      "and quietly make the world a warmer place.",
      "Your light touches more lives than you'll ever know.",
      "Today, the whole world turns to face you."
    ]
  },
  {
    lines: [
      "Not every superhero wears a cape —",
      "some wear a smile that can move mountains,",
      "and a heart big enough to hold the whole world.",
      "You are one of those superheroes."
    ]
  },
  {
    lines: [
      "You are the poem the universe wrote",
      "when it wanted to say something extraordinary.",
      "Every moment you exist, the world becomes",
      "a more beautiful and more meaningful place."
    ]
  },
  {
    lines: [
      "There is a rare kind of magic in you —",
      "the kind that makes ordinary moments unforgettable",
      "and difficult days feel somehow bearable.",
      "Never stop being your wonderful, magical self."
    ]
  },
  {
    lines: [
      "You carry mountains in your stride",
      "and oceans of grace in every single smile.",
      "On this special day and all the days that follow,",
      "know that you are deeply, endlessly loved."
    ]
  },
  {
    lines: [
      "Your courage is quiet but unshakeable,",
      "your kindness is powerful but unassuming.",
      "In a world that needs more of both,",
      "you are exactly what it has been waiting for."
    ]
  },
  {
    lines: [
      "Somewhere, a little girl is looking at you",
      "and dreaming of becoming someone just like you.",
      "That is the legacy of a remarkable woman.",
      "You are leaving the world better than you found it."
    ]
  },
  {
    lines: [
      "Every dream you carry has wings.",
      "Every hope you hold is a seed waiting to bloom.",
      "You are the gardener of your own destiny —",
      "and what a magnificent garden you are growing."
    ]
  },
  {
    lines: [
      "The universe made something truly special",
      "on the day you arrived in this world.",
      "We don't always know how to say it,",
      "but today we try — thank you for being you."
    ]
  },
  {
    lines: [
      "Your laughter is a gift to every room you enter.",
      "Your presence is the reason some days feel lighter.",
      "You are irreplaceable, brilliant, irreversible goodness —",
      "and the world knows it, even when you don't."
    ]
  },
  {
    lines: [
      "No storm has ever managed to break your spirit.",
      "No darkness has ever managed to dim your light.",
      "You have weathered it all with a grace",
      "that leaves the rest of us quietly breathless."
    ]
  },
  {
    lines: [
      "Like a wildflower, you grow where you are planted",
      "and bloom in ways no one could have expected.",
      "Beautiful. Resilient. Untamed and free.",
      "The world is your garden — claim every inch of it."
    ]
  },
  {
    lines: [
      "You don't just walk through life —",
      "you dance through it, painting color",
      "on every grey moment you encounter.",
      "Keep dancing, keep painting, keep shining."
    ]
  },
  {
    lines: [
      "Your kindness is never small.",
      "It echoes through the lives it touches",
      "long after the moment itself has passed.",
      "Thank you for choosing kindness, always."
    ]
  },
  {
    lines: [
      "You are made of stardust and determination,",
      "of late nights and quiet, hard-won victories,",
      "of a big heart and even bigger dreams.",
      "Happy Women's Day — you are the dream."
    ]
  },
  {
    lines: [
      "Fierce and gentle. Bold and tender.",
      "Complex and brilliant and endlessly surprising.",
      "There is no box in the world big enough to hold you,",
      "and thank goodness the world is finally learning that."
    ]
  },
  {
    lines: [
      "In the tapestry of the universe,",
      "your thread is golden, intricate, and essential.",
      "Pull it out and everything unravels.",
      "You are that important. You always have been."
    ]
  },
  {
    lines: [
      "You are proof that one person's light",
      "truly can illuminate an entire world.",
      "Keep burning, keep glowing, keep being",
      "the extraordinary woman you already are."
    ]
  },
  {
    lines: [
      "The path you walk becomes the road",
      "that others will one day follow with gratitude.",
      "You are building something greater than yourself —",
      "you are quietly building the future."
    ]
  },
  {
    lines: [
      "There is a wisdom in your eyes",
      "that speaks of things gently survived,",
      "of battles won quietly, of grace",
      "learned in the most difficult of moments."
    ]
  },
  {
    lines: [
      "You are the kind of woman",
      "who makes the whole world feel possible.",
      "On International Women's Day and every day,",
      "the world is deeply grateful you exist."
    ]
  },
  {
    lines: [
      "If joy had a face, it would look like yours.",
      "If strength had a name, it would be yours.",
      "If the world had a guardian angel —",
      "we all know exactly who that would be."
    ]
  },
  {
    lines: [
      "Wonder lives in the way you see the world —",
      "how you find beauty in the most forgotten corners",
      "and hope in the most unlikely of places.",
      "Don't ever stop looking at the world that way."
    ]
  },
  {
    lines: [
      "They say behind every great achievement",
      "is a woman who simply refused to give up.",
      "We see you. We honor you. We celebrate you —",
      "now and always, without reservation."
    ]
  },
  {
    lines: [
      "You are enough. Exactly as you are.",
      "Not when you're perfect — right now.",
      "Not when you've done more — today.",
      "You have always been, and will always be, enough."
    ]
  },
  {
    lines: [
      "The mountains you have moved were never small.",
      "The courage you have shown was never ordinary.",
      "Yet you carry it all like it weighs nothing —",
      "that is the quiet, breathtaking power of a great woman."
    ]
  },
  {
    lines: [
      "Here is a simple truth for a special day:",
      "the world is brighter because you're in it,",
      "the future is better because you're building it.",
      "And today — today belongs entirely to you."
    ]
  },
];

// ── 3. DOM REFS ──────────────────────────────────────────────

const landingScreen     = document.getElementById('landing');
const celebrationScreen = document.getElementById('celebration');
const nameForm          = document.getElementById('name-form');
const nameInput         = document.getElementById('name-input');
const nameDisplay       = document.querySelector('.name-display');
const canvas            = document.getElementById('particle-canvas');
const ctx               = canvas.getContext('2d');
const btnReplay         = document.getElementById('btn-replay');
const celebContent      = document.querySelector('.celebration-content');

// ── 4. COLORS ────────────────────────────────────────────────

const FIREWORK_COLORS = [
  '#f59e0b','#fde68a','#fcd34d',
  '#ec4899','#f9a8d4','#fbcfe8',
  '#c084fc','#e9d5ff',
  '#ffffff','#fef3c7',
];
const CONFETTI_COLORS = [
  '#ec4899','#f59e0b','#c084fc','#fbcfe8',
  '#fde68a','#7b2d8b','#be185d','#ffffff',
  '#f472b6','#a855f7','#fcd34d',
];
const PETAL_COLORS  = ['#f9a8d4','#fbcfe8','#fce7f3','#f472b6','#ec4899','#fde68a'];
const BUTTERFLY_COLORS = [
  'rgba(245,158,11,0.72)','rgba(236,72,153,0.72)',
  'rgba(192,132,252,0.72)','rgba(251,207,232,0.72)',
];
const HEART_COLORS  = ['#ec4899','#f472b6','#f9a8d4','#be185d','#fde68a'];
const GLITTER_COLORS = ['#f59e0b','#fde68a','#fcd34d','#ffffff','#fef9c3'];
const RING_COLORS   = ['#f59e0b','#ec4899','#c084fc','#ffffff','#fde68a'];

function rndColor(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rand(a, b)    { return a + Math.random() * (b - a); }

// ── 5. CANVAS SETUP ──────────────────────────────────────────

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ── 6. PARTICLE POOLS ────────────────────────────────────────

let burstParticles  = [];
let confettiPieces  = [];
let petalParticles  = [];
let heartParticles  = [];
let butterflies     = [];
let rockets         = [];
let shootingStars   = [];
let glitterPieces   = [];
let rings           = [];

let animFrameId         = null;
let fireworkInterval1   = null;
let fireworkInterval2   = null;
let shootingStarInterval = null;
let quoteInterval       = null;
let tick = 0;

// ── 7. FIREWORKS ─────────────────────────────────────────────

function launchRocket() {
  if (rockets.length >= 5) return;
  rockets.push({
    x: canvas.width * rand(0.2, 0.8),
    y: canvas.height,
    vy: -rand(9, 15),
    vx: rand(-1.5, 1.5),
    targetY: canvas.height * rand(0.1, 0.5),
    color: rndColor(FIREWORK_COLORS),
    trail: [],
  });
}

function explodeRocket(r) {
  const count = isMobile ? 52 : 84;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const speed = rand(2, 7);
    burstParticles.push({
      x: r.x, y: r.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: rand(0.01, 0.018),
      radius: rand(1.5, 3.5),
      color: rndColor(FIREWORK_COLORS),
      gravity: 0.07,
      glow: true,
    });
    if (i % 3 === 0) {
      burstParticles.push({
        x: r.x, y: r.y,
        vx: Math.cos(angle) * speed * 0.5,
        vy: Math.sin(angle) * speed * 0.5,
        alpha: 0.8,
        decay: rand(0.008, 0.013),
        radius: rand(2, 5),
        color: rndColor(FIREWORK_COLORS),
        gravity: 0.05,
        glow: false,
      });
    }
  }
  if (burstParticles.length > CONFIG.MAX_BURST) {
    burstParticles.splice(0, burstParticles.length - CONFIG.MAX_BURST);
  }
}

function updateRockets() {
  for (let i = rockets.length - 1; i >= 0; i--) {
    const r = rockets[i];
    r.trail.push({ x: r.x, y: r.y, alpha: 0.6 });
    if (r.trail.length > 8) r.trail.shift();
    r.x += r.vx;
    r.y += r.vy;
    r.vy *= 0.98;
    if (r.y <= r.targetY) { explodeRocket(r); rockets.splice(i, 1); }
  }
}

function drawRockets() {
  rockets.forEach(r => {
    r.trail.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = r.color;
      ctx.globalAlpha = (idx / r.trail.length) * pt.alpha;
      ctx.fill();
    });
    ctx.beginPath();
    ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 10;
    ctx.shadowColor = r.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  });
  ctx.globalAlpha = 1;
}

function updateBurstParticles() {
  for (let i = burstParticles.length - 1; i >= 0; i--) {
    const p = burstParticles[i];
    p.vx *= 0.97; p.vy += p.gravity; p.vy *= 0.97;
    p.x += p.vx;  p.y += p.vy;
    p.alpha -= p.decay;
    if (p.alpha <= 0) burstParticles.splice(i, 1);
  }
}

function drawBurstParticles() {
  burstParticles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    if (p.glow) { ctx.shadowBlur = 8; ctx.shadowColor = p.color; }
    ctx.fill();
    ctx.shadowBlur = 0;
  });
  ctx.globalAlpha = 1;
}

// ── 8. EXPANDING RINGS ────────────────────────────────────────

function spawnRings() {
  for (let i = 0; i < CONFIG.RING_COUNT; i++) {
    rings.push({
      x:      canvas.width * 0.5,
      y:      canvas.height * 0.42,
      radius: 10,
      maxR:   Math.max(canvas.width, canvas.height) * 0.75,
      growSpeed: rand(3, 6) + i * 1.5,
      alpha:  0.7 - i * 0.1,
      color:  RING_COLORS[i % RING_COLORS.length],
      lineWidth: rand(1, 3.5),
      delay:  i * 18,  // tick delay between rings
      started: false,
    });
  }
}

function updateRings() {
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    if (r.delay > 0) { r.delay--; continue; }
    r.started = true;
    r.radius += r.growSpeed;
    r.alpha  -= 0.006;
    if (r.alpha <= 0 || r.radius > r.maxR) rings.splice(i, 1);
  }
}

function drawRings() {
  rings.forEach(r => {
    if (!r.started) return;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = r.color;
    ctx.lineWidth = r.lineWidth;
    ctx.globalAlpha = r.alpha;
    ctx.shadowBlur = 14;
    ctx.shadowColor = r.color;
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
  ctx.globalAlpha = 1;
}

// ── 9. SHOOTING STARS ────────────────────────────────────────

function spawnShootingStar() {
  const speed = rand(7, 13);
  const angle = rand(20, 50) * (Math.PI / 180); // diagonal downward
  shootingStars.push({
    x:    rand(-80, canvas.width * 0.7),
    y:    rand(-80, canvas.height * 0.35),
    vx:   Math.cos(angle) * speed,
    vy:   Math.sin(angle) * speed,
    len:  rand(70, 180),
    alpha: 0,
    fadeIn: true,
    color: rndColor(['#ffffff','#fde68a','#fef3c7','#fbcfe8']),
    width: rand(1, 2.5),
  });
}

function updateShootingStars() {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.x += s.vx;
    s.y += s.vy;
    if (s.fadeIn) {
      s.alpha = Math.min(1, s.alpha + 0.08);
      if (s.alpha >= 1) s.fadeIn = false;
    } else {
      s.alpha -= 0.025;
    }
    if (s.alpha <= 0 || s.x > canvas.width + 100 || s.y > canvas.height + 100) {
      shootingStars.splice(i, 1);
    }
  }
}

function drawShootingStars() {
  shootingStars.forEach(s => {
    const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
    const nx = -s.vx / speed;
    const ny = -s.vy / speed;
    const tx = s.x + nx * s.len;
    const ty = s.y + ny * s.len;

    const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
    grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
    grad.addColorStop(0.3, `rgba(253,230,138,${s.alpha * 0.6})`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.save();
    ctx.strokeStyle = grad;
    ctx.lineWidth = s.width;
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 8;
    ctx.shadowColor = s.color;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();
  });
}

// ── 10. GLITTER RAIN ─────────────────────────────────────────

function spawnGlitter(count) {
  for (let i = 0; i < count; i++) {
    glitterPieces.push({
      x:          rand(0, canvas.width),
      y:          rand(-60, 0),
      vy:         rand(0.3, 1.3),
      vx:         rand(-0.25, 0.25),
      size:       rand(1, 2.8),
      alpha:      rand(0.5, 1),
      decay:      rand(0.002, 0.006),
      color:      rndColor(GLITTER_COLORS),
      twinkle:    rand(0, Math.PI * 2),
      twinkleSpd: rand(0.06, 0.16),
    });
  }
}

function updateGlitter() {
  for (let i = glitterPieces.length - 1; i >= 0; i--) {
    const g = glitterPieces[i];
    g.twinkle += g.twinkleSpd;
    g.x += g.vx;
    g.y += g.vy;
    g.alpha -= g.decay;
    if (g.alpha <= 0 || g.y > canvas.height + 10) {
      // respawn from top to create continuous rain
      glitterPieces[i] = {
        x:         rand(0, canvas.width),
        y:         rand(-20, 0),
        vy:        rand(0.3, 1.3),
        vx:        rand(-0.25, 0.25),
        size:      rand(1, 2.8),
        alpha:     rand(0.5, 1),
        decay:     rand(0.002, 0.006),
        color:     rndColor(GLITTER_COLORS),
        twinkle:   rand(0, Math.PI * 2),
        twinkleSpd: rand(0.06, 0.16),
      };
    }
  }
}

function drawGlitter() {
  glitterPieces.forEach(g => {
    const a = g.alpha * (0.4 + 0.6 * Math.abs(Math.sin(g.twinkle)));
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2);
    ctx.fillStyle = g.color;
    ctx.globalAlpha = a;
    ctx.shadowBlur = 5;
    ctx.shadowColor = g.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  });
  ctx.globalAlpha = 1;
}

// ── 11. CONFETTI ─────────────────────────────────────────────

function spawnConfetti(count) {
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x:         rand(0, canvas.width),
      y:         rand(-120, -10),
      vx:        rand(-1.2, 1.2),
      vy:        rand(1.5, 4),
      rotation:  rand(0, Math.PI * 2),
      rotSpeed:  rand(-0.06, 0.06),
      w:         rand(5, 12),
      h:         rand(3, 7),
      color:     rndColor(CONFETTI_COLORS),
      alpha:     1,
      swing:     rand(0, Math.PI * 2),
      swingSpeed: rand(0.018, 0.04),
    });
  }
}

function updateConfetti() {
  for (let i = confettiPieces.length - 1; i >= 0; i--) {
    const c = confettiPieces[i];
    c.swing += c.swingSpeed;
    c.x += Math.sin(c.swing) * 1.2 + c.vx;
    c.y += c.vy;
    c.rotation += c.rotSpeed;
    if (c.y > canvas.height - 80) c.alpha -= 0.022;
    if (c.alpha <= 0 || c.y > canvas.height + 20) confettiPieces.splice(i, 1);
  }
}

function drawConfetti() {
  confettiPieces.forEach(c => {
    ctx.save();
    ctx.globalAlpha = c.alpha;
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotation);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
    ctx.restore();
  });
  ctx.globalAlpha = 1;
}

// ── 12. CANVAS PETALS ────────────────────────────────────────

function spawnPetal() {
  return {
    x:         rand(0, canvas.width),
    y:         rand(-80, -10),
    vy:        rand(0.8, 2.5),
    vx:        rand(-0.8, 0.8),
    rotation:  rand(0, Math.PI * 2),
    rotSpeed:  rand(-0.03, 0.03),
    size:      rand(8, 18),
    color:     rndColor(PETAL_COLORS),
    alpha:     rand(0.55, 0.95),
    swing:     rand(0, Math.PI * 2),
    swingSpeed: rand(0.012, 0.028),
  };
}

function initPetals() {
  petalParticles = [];
  for (let i = 0; i < CONFIG.PETAL_COUNT; i++) {
    const p = spawnPetal();
    p.y = rand(0, canvas.height);
    petalParticles.push(p);
  }
}

function updatePetals() {
  petalParticles.forEach((p, i) => {
    p.swing += p.swingSpeed;
    p.x += Math.sin(p.swing) * 0.8 + p.vx;
    p.y += p.vy;
    p.rotation += p.rotSpeed;
    if (p.y > canvas.height + 30) petalParticles[i] = spawnPetal();
  });
}

function drawPetals() {
  petalParticles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 5;
    ctx.shadowColor = p.color;
    const path = new Path2D();
    path.moveTo(0, -p.size);
    path.quadraticCurveTo( p.size * 0.75, -p.size * 0.4, 0,  p.size);
    path.quadraticCurveTo(-p.size * 0.75, -p.size * 0.4, 0, -p.size);
    ctx.fill(path);
    ctx.shadowBlur = 0;
    ctx.restore();
  });
  ctx.globalAlpha = 1;
}

// ── 13. HEARTS ───────────────────────────────────────────────

function spawnHeart() {
  return {
    x:       rand(0, canvas.width),
    y:       canvas.height + 30,
    vy:      -rand(0.7, 2),
    vx:      rand(-0.6, 0.6),
    size:    rand(10, 24),
    color:   rndColor(HEART_COLORS),
    alpha:   rand(0.65, 1),
    swing:   rand(0, Math.PI * 2),
    swingSpeed: rand(0.01, 0.025),
    decay:   rand(0.003, 0.007),
  };
}

function initHearts() {
  heartParticles = [];
  for (let i = 0; i < CONFIG.HEART_COUNT; i++) {
    const h = spawnHeart();
    h.y = rand(0, canvas.height);
    heartParticles.push(h);
  }
}

function updateHearts() {
  heartParticles.forEach((h, i) => {
    h.swing += h.swingSpeed;
    h.x += Math.sin(h.swing) * 0.7 + h.vx;
    h.y += h.vy;
    h.alpha -= h.decay;
    if (h.alpha <= 0 || h.y < -40) heartParticles[i] = spawnHeart();
  });
}

function drawHeart(x, y, size, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.fillStyle = color;
  ctx.shadowBlur = 10;
  ctx.shadowColor = color;
  ctx.beginPath();
  ctx.moveTo(0, -0.25);
  ctx.bezierCurveTo( 0.5, -0.9,  1.15,  0.05, 0,  0.85);
  ctx.bezierCurveTo(-1.15,  0.05, -0.5, -0.9,  0, -0.25);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawHearts() {
  heartParticles.forEach(h => drawHeart(h.x, h.y, h.size, h.color, h.alpha));
}

// ── 14. BUTTERFLIES ──────────────────────────────────────────

function spawnButterfly() {
  return {
    x:         rand(50, canvas.width - 50),
    y:         rand(canvas.height * 0.1, canvas.height * 0.8),
    vx:        rand(-0.6, 0.6) || 0.3,
    vy:        rand(-0.3, 0.3),
    color:     rndColor(BUTTERFLY_COLORS),
    size:      rand(0.45, 0.85),
    flapSpeed: rand(0.08, 0.15),
    tick:      rand(0, Math.PI * 2),
    swingAmp:  rand(0.5, 1.5),
    alpha:     rand(0.65, 0.95),
    wanderTick: 0,
    targetX:   rand(50, canvas.width - 50),
    targetY:   rand(canvas.height * 0.1, canvas.height * 0.8),
  };
}

function initButterflies() {
  butterflies = [];
  for (let i = 0; i < CONFIG.BUTTERFLY_COUNT; i++) butterflies.push(spawnButterfly());
}

function updateButterflies() {
  butterflies.forEach(b => {
    b.tick += b.flapSpeed;
    b.wanderTick++;
    const dx = b.targetX - b.x;
    const dy = b.targetY - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 20 || b.wanderTick > 180) {
      b.targetX = rand(50, canvas.width - 50);
      b.targetY = rand(canvas.height * 0.1, canvas.height * 0.8);
      b.wanderTick = 0;
    }
    b.vx += (dx / dist) * 0.04;
    b.vy += (dy / dist) * 0.04;
    const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (speed > 2) { b.vx = (b.vx / speed) * 2; b.vy = (b.vy / speed) * 2; }
    b.x += b.vx;
    b.y += b.vy + Math.sin(b.tick * 0.5) * b.swingAmp;
  });
}

function drawButterfly(b) {
  const flapY = Math.abs(Math.sin(b.tick));
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.scale(b.size, b.size);
  ctx.globalAlpha = b.alpha;

  [[-1, 1], [1, 1]].forEach(([sx, sy]) => {
    ctx.save();
    ctx.scale(sx, flapY * sy);
    // Upper wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(22, -35, 52, -18, 44,  8);
    ctx.bezierCurveTo(36,  26,  8,  18,  0,  0);
    ctx.fillStyle = b.color;
    ctx.fill();
    // Lower wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(18,  10, 38,  5, 32, 22);
    ctx.bezierCurveTo(26,  36,  6, 28,  0,  0);
    ctx.fillStyle = b.color;
    ctx.fill();
    ctx.restore();
  });

  ctx.beginPath();
  ctx.ellipse(0, 0, 2, 8, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fill();
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawButterflies() { butterflies.forEach(b => drawButterfly(b)); }

// ── 15. MAIN RENDER LOOP ─────────────────────────────────────

function animate() {
  animFrameId = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tick++;

  updateRings();
  updateRockets();
  updateBurstParticles();
  updateShootingStars();
  updateConfetti();
  updateGlitter();
  updatePetals();
  updateHearts();
  updateButterflies();

  drawRings();
  drawBurstParticles();
  drawShootingStars();
  drawConfetti();
  drawGlitter();
  drawPetals();
  drawHearts();
  drawButterflies();
  drawRockets();
}

// ── 16. START / STOP ─────────────────────────────────────────

function startParticleSystem() {
  tick = 0;
  rings         = [];
  shootingStars = [];

  initPetals();
  initHearts();
  initButterflies();
  spawnConfetti(CONFIG.CONFETTI_COUNT);
  spawnGlitter(CONFIG.GLITTER_COUNT);
  spawnRings();

  // Firework barrage
  let count = 0;
  fireworkInterval1 = setInterval(() => {
    launchRocket();
    count++;
    if (count >= 8) {
      clearInterval(fireworkInterval1);
      fireworkInterval2 = setInterval(launchRocket, CONFIG.FIREWORK_INTERVAL_AMB);
    }
  }, CONFIG.FIREWORK_INTERVAL_INIT);

  // Shooting stars
  shootingStarInterval = setInterval(spawnShootingStar, CONFIG.SHOOTING_STAR_INTERVAL);
  setTimeout(spawnShootingStar, 800); // one right away

  if (animFrameId) cancelAnimationFrame(animFrameId);
  animate();
}

function clearAllParticles() {
  burstParticles  = [];
  confettiPieces  = [];
  petalParticles  = [];
  heartParticles  = [];
  butterflies     = [];
  rockets         = [];
  shootingStars   = [];
  glitterPieces   = [];
  rings           = [];
  clearInterval(fireworkInterval1);
  clearInterval(fireworkInterval2);
  clearInterval(shootingStarInterval);
  if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ── 17. TEXT REVEAL ──────────────────────────────────────────

function revealTextLines() {
  const lines = document.querySelectorAll('.celeb-line');
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('revealed'), 750 + i * 420);
  });
}

// ── 18. TYPEWRITER NAME ──────────────────────────────────────

function typewriterReveal(text, el) {
  el.textContent = '';
  const delay = Math.min(80, Math.max(28, Math.floor(420 / text.length)));
  let i = 0;
  const interval = setInterval(() => {
    el.textContent = text.substring(0, i + 1);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}

// ── 19. ROTATING QUOTES ──────────────────────────────────────

function startQuoteRotation() {
  const quotes = document.querySelectorAll('.quote');
  let current = 0;
  quotes[current].classList.add('active-quote');
  quoteInterval = setInterval(() => {
    quotes[current].classList.remove('active-quote');
    current = (current + 1) % quotes.length;
    quotes[current].classList.add('active-quote');
  }, 4200);
}

// ── 20. STAR FIELD (CSS) ─────────────────────────────────────

function generateStarField() {
  const field = document.querySelector('.star-field');
  if (!field) return;
  field.innerHTML = '';
  const count = isMobile ? 45 : 90;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'bg-star';
    const size = rand(1, 3.2);
    star.style.cssText = `
      left: ${rand(0, 100)}%;
      top:  ${rand(0, 100)}%;
      width:  ${size}px;
      height: ${size}px;
      animation-duration: ${rand(2, 6.5)}s;
      animation-delay:    ${rand(-5, 2)}s;
    `;
    field.appendChild(star);
  }
}

// ── 21. SCREEN TRANSITION ────────────────────────────────────

const heartReveal    = document.getElementById('heart-reveal');
const hrGlow         = document.querySelector('.hr-glow');
const hrNameEl       = document.querySelector('.hr-name');
const hrSparkles     = document.querySelector('.hr-sparkles');

// Generate ambient sparkles inside the heart reveal backdrop
function generateHrSparkles() {
  hrSparkles.innerHTML = '';
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('div');
    s.className = 'hr-sparkle';
    const size = rand(2, 5.5);
    s.style.cssText = `
      left: ${rand(3, 97)}%;
      top:  ${rand(3, 97)}%;
      width:  ${size}px;
      height: ${size}px;
      animation-duration: ${rand(1.4, 4)}s;
      animation-delay:    ${rand(-3, 1)}s;
    `;
    hrSparkles.appendChild(s);
  }
}

// Burst cursor hearts explosively from screen centre
function burstHeartsFromCenter() {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  for (let i = 0; i < 22; i++) {
    setTimeout(() => {
      const angle = (i / 22) * Math.PI * 2 + rand(-0.3, 0.3);
      const dist  = rand(30, 120);
      const x = cx + Math.cos(angle) * dist;
      const y = cy + Math.sin(angle) * dist;
      const el = document.createElement('span');
      el.className   = 'cursor-heart';
      el.textContent = '♥';
      const size  = rand(22, 46);
      const color = rndColor(CURSOR_COLORS);
      el.style.cssText = `
        left: ${x}px; top: ${y}px;
        font-size: ${size}px;
        color: ${color};
        text-shadow: 0 0 14px ${color};
        --dur: ${rand(0.9, 1.5)}s;
        --drift: ${rand(-80, 80)}px;
        --rot-start: ${rand(-40, 40)}deg;
        --rot-end:   ${rand(-80, 80)}deg;
      `;
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove(), { once: true });
    }, i * 35);
  }
}

function showCelebrationScreen(name) {
  // Pick wish and populate lines
  const wish = WISHES[Math.floor(Math.random() * WISHES.length)];
  document.querySelectorAll('.celeb-line').forEach((line, i) => {
    line.textContent = wish.lines[i] || '';
  });
  document.querySelectorAll('.celeb-line').forEach(l => l.classList.remove('revealed'));
  document.querySelectorAll('.quote').forEach(q => q.classList.remove('active-quote'));
  clearInterval(quoteInterval);

  celebrationScreen.classList.remove('hidden');
  celebrationScreen.style.opacity = '0';
  celebContent.classList.remove('entering');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      celebrationScreen.style.transition = 'opacity 0.7s ease';
      celebrationScreen.style.opacity    = '1';
      celebContent.classList.add('entering');

      resizeCanvas();
      startParticleSystem();

      nameDisplay.textContent = '';
      typewriterReveal(name, nameDisplay);
      revealTextLines();
      setTimeout(startQuoteRotation, 2800);
    });
  });
}

function launchCelebration(name) {
  generateHrSparkles();

  // 1 — Fade out landing
  landingScreen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  landingScreen.style.opacity    = '0';
  landingScreen.style.transform  = 'translateY(-30px)';

  setTimeout(() => {
    landingScreen.classList.add('hidden');

    // 2 — Show heart reveal
    hrGlow.classList.remove('hr-beating', 'hr-exploding');
    hrGlow.style.animation = 'none';
    void hrGlow.offsetWidth; // reflow to restart animation
    hrGlow.style.animation = '';

    // Reset text animations by re-inserting elements
    const hrGreeting = document.querySelector('.hr-greeting');
    hrGreeting.style.animation = 'none';
    hrNameEl.style.animation   = 'none';
    void hrGreeting.offsetWidth;
    hrGreeting.style.animation = '';
    hrNameEl.style.animation   = '';
    hrNameEl.textContent = '';

    heartReveal.classList.remove('hidden');

    // Type the name inside the heart
    setTimeout(() => typewriterReveal(name, hrNameEl), 550);

    // 3 — After enter animation, start beating
    setTimeout(() => {
      hrGlow.classList.add('hr-beating');
    }, 750);

    // 4 — Explode and transition to celebration
    setTimeout(() => {
      hrGlow.classList.remove('hr-beating');
      hrGlow.classList.add('hr-exploding');
      burstHeartsFromCenter();

      setTimeout(() => {
        heartReveal.classList.add('hidden');
        showCelebrationScreen(name);
      }, 520);

    }, 2900);

  }, 520);
}

// ── 22. FORM & EVENTS ────────────────────────────────────────

nameForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.classList.remove('shake');
    void nameInput.offsetWidth;
    nameInput.classList.add('shake');
    nameInput.addEventListener('animationend', () => nameInput.classList.remove('shake'), { once: true });
    return;
  }
  launchCelebration(name);
});

nameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') nameForm.dispatchEvent(new Event('submit'));
});

btnReplay.addEventListener('click', () => {
  clearAllParticles();
  document.querySelectorAll('.celeb-line').forEach(l => l.classList.remove('revealed'));
  document.querySelectorAll('.quote').forEach(q => q.classList.remove('active-quote'));
  clearInterval(quoteInterval);
  setTimeout(() => {
    resizeCanvas();
    startParticleSystem();
    revealTextLines();
    setTimeout(startQuoteRotation, 2800);
  }, 60);
});

// ── 23. CURSOR HEART TRAIL ───────────────────────────────────

const CURSOR_SYMBOLS = ['♥', '♥', '♥', '❀', '✦', '♡'];
const CURSOR_COLORS  = [
  '#ec4899', '#f472b6', '#f9a8d4',
  '#f59e0b', '#fde68a', '#fbcfe8',
  '#c084fc', '#ffffff',
];

let lastEmitTime = 0;
let lastEmitX    = -999;
let lastEmitY    = -999;

function emitCursorHeart(x, y) {
  const now  = Date.now();
  const dx   = x - lastEmitX;
  const dy   = y - lastEmitY;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Throttle: at least 14px moved OR 55ms elapsed
  if (dist < 14 && now - lastEmitTime < 55) return;

  lastEmitTime = now;
  lastEmitX    = x;
  lastEmitY    = y;

  const el = document.createElement('span');
  el.className  = 'cursor-heart';
  el.textContent = CURSOR_SYMBOLS[Math.floor(Math.random() * CURSOR_SYMBOLS.length)];

  const size      = rand(18, 34);
  const dur       = rand(0.75, 1.15);
  const drift     = rand(-30, 30);
  const rotStart  = rand(-25, 25);
  const rotEnd    = rand(-45, 45);
  const color     = rndColor(CURSOR_COLORS);

  el.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    font-size: ${size}px;
    color: ${color};
    text-shadow: 0 0 8px ${color};
    --dur: ${dur}s;
    --drift: ${drift}px;
    --rot-start: ${rotStart}deg;
    --rot-end: ${rotEnd}deg;
  `;

  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove(), { once: true });
}

document.addEventListener('mousemove', e => {
  emitCursorHeart(e.clientX, e.clientY);
});

// Touch support
document.addEventListener('touchmove', e => {
  const t = e.touches[0];
  emitCursorHeart(t.clientX, t.clientY);
}, { passive: true });

// ── 24. INIT ─────────────────────────────────────────────────

generateStarField();
generateLandingPetals();
generateSparkles();

function generateLandingPetals() {
  const container = document.querySelector('.ambient-petals');
  container.innerHTML = '';
  for (let i = 0; i < 15; i++) {
    const el = document.createElement('div');
    el.className = 'petal';
    const size = rand(9, 20);
    el.style.cssText = `
      left: ${rand(0, 100)}%;
      width:  ${size}px;
      height: ${size * 1.45}px;
      background: ${rndColor(PETAL_COLORS)};
      animation-duration: ${rand(6, 13)}s;
      animation-delay:    ${rand(-9, 1)}s;
      opacity: ${rand(0.45, 0.9)};
    `;
    container.appendChild(el);
  }
}

function generateSparkles() {
  const layer = document.querySelector('.sparkle-layer');
  layer.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.className = 'sparkle-dot';
    const size = rand(2, 6);
    dot.style.cssText = `
      left: ${rand(2, 98)}%;
      top:  ${rand(5, 90)}%;
      width:  ${size}px;
      height: ${size}px;
      animation-duration: ${rand(1.5, 4.5)}s;
      animation-delay:    ${rand(0, 5)}s;
    `;
    layer.appendChild(dot);
  }
}
