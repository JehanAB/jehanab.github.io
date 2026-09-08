import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'services', 'projects', 'testimonials', 'contact'];

export function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    function update() {
      let current = 'home';
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      setActive(current);
    }
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return active;
}
