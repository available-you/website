const TARGET = "available://";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%?@";
const hackText = document.querySelector("#hack-text");
const glitchHeading = document.querySelector(".glitch");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let intervalId;

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function scramble(to, duration = 900) {
  if (!hackText) return;

  const steps = Math.max(1, Math.floor(duration / 33));
  let step = 0;

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    step += 1;
    const progress = step / steps;
    const lockCount = Math.floor(progress * to.length);

    let out = "";
    for (let i = 0; i < to.length; i += 1) {
      out += i < lockCount ? to[i] : randomGlyph();
    }

    hackText.textContent = out;
    if (glitchHeading) glitchHeading.dataset.text = out;

    if (step >= steps) {
      clearInterval(intervalId);
      hackText.textContent = to;
      if (glitchHeading) glitchHeading.dataset.text = to;
    }
  }, 33);
}

function pulseGlitch() {
  if (!glitchHeading) return;
  glitchHeading.dataset.text = hackText?.textContent || TARGET;
}

function bootSequence() {
  if (!hackText || !glitchHeading) return;

  if (reduceMotion.matches) {
    hackText.textContent = TARGET;
    glitchHeading.dataset.text = TARGET;
    return;
  }

  scramble(TARGET, 1150);
  pulseGlitch();

  setInterval(() => {
    scramble(TARGET, 740);
    pulseGlitch();
  }, 2800);
}

bootSequence();
