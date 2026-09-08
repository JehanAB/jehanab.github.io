import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide both until the mouse actually moves once, so they never briefly
    // render at their CSS default (top:0; left:0) position on load.
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    let hasMoved = false;

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    let frameId;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      frameId = requestAnimationFrame(animateRing);
    }
    animateRing();

    function grow() { ring.classList.add('grow'); dot.classList.add('grow'); }
    function shrink() { ring.classList.remove('grow'); dot.classList.remove('grow'); }
    function hide() { dot.style.opacity = '0'; ring.style.opacity = '0'; }
    function show() { if (hasMoved) { dot.style.opacity = '1'; ring.style.opacity = '1'; } }

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    // Delegate hover-grow to any interactive element, since project cards
    // and buttons are rendered dynamically by React.
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .theme-toggle, input, textarea, .project-card')) grow();
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .theme-toggle, input, textarea, .project-card')) shrink();
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
    };
  }, []);

  return { dotRef, ringRef };
}
