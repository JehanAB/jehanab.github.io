import { useEffect, useState } from 'react';

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function update() { setScrollY(window.scrollY); }
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return scrollY;
}
