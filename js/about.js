// ─── ABOUT — PERSON SELECT ────────────────────────────────────────────────────
let activePerson = null;

function selectPerson(id) {
  const card   = document.getElementById('pcard-' + id);
  if (!card) return;
  const grid   = document.querySelector('.about-persons-grid');
  const slot   = grid.querySelector('.about-expanded-slot');
  const topRow = grid.querySelector('.about-row[data-row-order="0"]');
  const botRow = grid.querySelector('.about-row[data-row-order="1"]');

  const allCards = () => [...grid.querySelectorAll('.person-card')];
  // Return the row a card originally belongs to via data-order
  const getOrigRow = (c) => +c.dataset.order < 6 ? topRow : botRow;
  const restoreRowOrder = (r) => {
    [...r.querySelectorAll('.person-card')]
      .sort((a, b) => +a.dataset.order - +b.dataset.order)
      .forEach(c => r.appendChild(c));
  };

  // ── Deactivate same card ───────────────────────────────────────────────
  if (activePerson === id) {
    const state = Flip.getState(allCards());
    card.classList.remove('active');
    card.classList.add('is-flipping');
    const origRow = getOrigRow(card);
    origRow.appendChild(card);
    restoreRowOrder(origRow);
    grid.classList.remove('has-active');
    Flip.from(state, {
      duration: 0.38,
      ease: 'power2.inOut',
      onComplete: () => card.classList.remove('is-flipping')
    });
    activePerson = null;
    return;
  }

  // ── Switching: different card clicked while one is already active ─────
  if (activePerson) {
    const prev        = document.getElementById('pcard-' + activePerson);
    const prevOrigRow = prev ? getOrigRow(prev) : null;
    const allCardEls  = allCards();

    // 1. Snapshot EVERY card's rect BEFORE any DOM change
    const rectsBefore = new Map(allCardEls.map(c => [c, c.getBoundingClientRect()]));

    // 2. Put ALL cards in their CORRECT positions at once
    if (prev) {
      prev.classList.add('is-flipping');
      prev.classList.remove('active');
      prevOrigRow.appendChild(prev);
      restoreRowOrder(prevOrigRow);
    }
    const origRow = getOrigRow(card);
    restoreRowOrder(origRow);
    slot.appendChild(card);
    card.classList.add('active', 'is-flipping');

    // 3. Force reflow
    grid.offsetHeight;

    // 4. Freeze ALL cards at their visual-before positions
    allCardEls.forEach(c => {
      const before = rectsBefore.get(c);
      const after  = c.getBoundingClientRect();
      gsap.set(c, {
        x: before.left - after.left,
        y: before.top  - after.top
      });
    });

    // 5. Tween ONLY the two animated cards to (0,0)
    const animated = [prev, card].filter(Boolean);
    gsap.to(animated, {
      x: 0, y: 0,
      duration: 0.42,
      ease: 'power2.inOut',
      onComplete: () => {
        allCardEls.forEach(c => gsap.set(c, { clearProps: 'x,y,transform' }));
        animated.forEach(c => c.classList.remove('is-flipping'));
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 500);
      }
    });

    activePerson = id;
    return;
  }

  // ── Fresh expand (no previous active card) ────────────────────────────
  const state = Flip.getState(allCards());

  const origRow = getOrigRow(card);
  restoreRowOrder(origRow);
  slot.appendChild(card);
  card.classList.add('active', 'is-flipping');
  grid.classList.add('has-active');

  Flip.from(state, {
    duration: 0.42,
    ease: 'power2.inOut',
    onComplete: () => {
      card.classList.remove('is-flipping');
      setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 500);
    }
  });

  activePerson = id;
}
