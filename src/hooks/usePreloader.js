import { useEffect, useState } from 'react';

export function usePreloader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [fillWidth, setFillWidth] = useState('0%');

  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setVisible(false);
      return;
    }

    document.body.classList.add('intro-lock');

    const fillTimer = setTimeout(() => setFillWidth('100%'), 120);
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.body.classList.remove('intro-lock');
    }, 1500);
    const removeTimer = setTimeout(() => setVisible(false), 2100);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(doneTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove('intro-lock');
    };
  }, []);

  return { visible, done, fillWidth };
}
