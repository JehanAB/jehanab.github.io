import { useEffect, useRef } from 'react';

/**
 * Adds a subtle 3D tilt-on-hover effect to whatever element the returned
 * ref is attached to — the mouse position inside the element drives a
 * rotateX/rotateY transform, and it resets smoothly on mouseleave.
 *
 * maxTilt: maximum rotation in degrees (default 5 — enough to read as
 * "3D" without feeling gimmicky on a project screenshot).
 */
export function useTilt(maxTilt = 5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preferences — skip the effect entirely.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -maxTilt;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function handleLeave() {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxTilt]);

  return ref;
}
