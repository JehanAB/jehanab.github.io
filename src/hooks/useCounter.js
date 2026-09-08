import { useEffect, useState } from 'react';

export function useCounter(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    let frameId;

    function tick() {
      current += step;
      if (current >= target) {
        setValue(target);
        return;
      }
      setValue(current);
      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [active, target]);

  return value;
}
