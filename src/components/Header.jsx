import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Header({ theme, toggleTheme, activeSection }) {
  const { lang, toggleLanguage, t } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { id: 'home', key: 'nav_home' },
    { id: 'services', key: 'nav_services' },
    { id: 'projects', key: 'nav_projects' },
    { id: 'testimonials', key: 'nav_testimonials' }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo">Jehan<span className="dot">★</span></a>

        <nav className={`main-nav ${navOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setNavOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <button className="lang-toggle" aria-label="Toggle language" onClick={toggleLanguage}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>

        <button className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
          <svg className="icon-sun" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4.5a1 1 0 011-1V2a1 1 0 10-2 0v1.5a1 1 0 011 1Zm0 15a1 1 0 011 1V22a1 1 0 10-2 0v-1.5a1 1 0 011-1ZM4.5 12a1 1 0 01-1 1H2a1 1 0 110-2h1.5a1 1 0 011 1Zm18 0a1 1 0 01-1 1H20a1 1 0 110-2h1.5a1 1 0 011 1ZM6.34 6.34a1 1 0 01-1.41 0L3.87 5.28a1 1 0 111.41-1.41l1.06 1.05a1 1 0 010 1.42Zm12.73 12.73a1 1 0 01-1.41 0l-1.05-1.06a1 1 0 111.41-1.41l1.05 1.06a1 1 0 010 1.41ZM6.34 17.66a1 1 0 010 1.41l-1.06 1.05a1 1 0 11-1.41-1.41l1.05-1.05a1 1 0 011.42 0ZM19.07 4.93a1 1 0 010 1.41l-1.06 1.06a1 1 0 11-1.41-1.42l1.05-1.05a1 1 0 011.42 0ZM12 7a5 5 0 100 10 5 5 0 000-10Z"/></svg>
          <svg className="icon-moon" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79Z"/></svg>
        </button>

        <a href="#contact" className="btn btn-primary header-btn">{t('nav_contact')}</a>

        <button className="hamburger" aria-label="Toggle menu" onClick={() => setNavOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
