import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="logo footer-logo">Jehan<span className="dot">★</span></a>
        <p className="footer-signature">{t('footer_signature')} {year}</p>
        <div className="footer-links">
            <a href="https://github.com/JehanAB" target="_blank" rel="noopener" aria-label="GitHub"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/jehan-albuainain-28a798212/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:JeehanAB@gmail.com" aria-label="Email"><i className="bi bi-envelope-fill"></i></a>
        </div>
      </div>
    </footer>
  );
}
