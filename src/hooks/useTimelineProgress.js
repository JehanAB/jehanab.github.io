import { useEffect, useRef, useState } from 'react';

export function useTimelineProgress() {
  const containerRef = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height;
      let progressed = viewportH * 0.75 - rect.top;
      progressed = Math.max(0, Math.min(progressed, total));
      setPct(total > 0 ? (progressed / total) * 100 : 0);
    }
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return { containerRef, pct };
}
