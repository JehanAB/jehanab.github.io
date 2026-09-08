import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { orbitIcons } from '../data/techStack.js';
import avatarImg from '../assets/avatar.webp';

function Typewriter() {
  const { lang, t } = useLanguage();
  const [text, setText] = useState('');
  const roleIndexRef = useRef(0);
  const runIdRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const roles = [t('role_1'), t('role_2'), t('role_3'), t('role_4')];
    runIdRef.current += 1;
    const runId = runIdRef.current;
    roleIndexRef.current = 0;

    if (reduceMotion) {
      setText(roles[0]);
      return;
    }

    let charIndex = 0;
    let deleting = false;
    let timer;

    function tick() {
      if (runId !== runIdRef.current) return;
      const current = roles[roleIndexRef.current];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    }
    tick();

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <p className="hero-title-role">
      <span>{text}</span><span className="type-cursor">|</span>
    </p>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [textRef, textIn] = useReveal();
  const [mediaRef, mediaIn] = useReveal();

  return (
    <section className="hero" id="home">
      <div className="blob blob-1"></div>
      <div className="squiggle squiggle-1"></div>

      <div className="container hero-inner">
        <div className={`hero-text ${textIn ? 'in-view' : ''}`} ref={textRef}>
          <span className="status-badge"><span className="status-dot"></span>{t('status_available')}</span>
          <p className="eyebrow">{t('hero_eyebrow')}</p>
          <h1>JEHAN <span>ALBUAINAIN</span></h1>
          <Typewriter />
          <p className="hero-desc">{t('hero_desc')}</p>
          <a href="#contact" className="btn btn-primary">{t('hero_hire')}</a>

          <div className="hero-contact-line">
            <span>{t('hero_location')}</span>
            <span>📞 +966 50 988 2891</span>
          </div>

          <div className="follow-row">
            <span>{t('hero_follow')}</span>
            <a href="https://github.com/JehanAB" target="_blank" rel="noopener" aria-label="GitHub"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/jehan-albuainain-28a798212/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:JeehanAB@gmail.com" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>

        <div className={`hero-media ${mediaIn ? 'in-view' : ''}`} ref={mediaRef}>
          <div className="hero-photo-wrap">
            <div className="orbit-ring">
              {orbitIcons.map((icon, i) => (
                <span className="orbit-badge" style={{ '--i': i }} key={icon}>
                  <i className={icon}></i>
                </span>
              ))}
            </div>
            <div className="hero-photo-glow"></div>
            <div className="hero-photo">
              <img src={avatarImg} alt="Jehan AlBuainain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
