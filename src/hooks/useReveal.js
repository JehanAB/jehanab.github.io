import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to any element, and `inView` which flips to true
 * once that element scrolls into view (and stays true — this mirrors the
 * original site's one-shot reveal/counter/skill-bar animations).
 */
export function useReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
