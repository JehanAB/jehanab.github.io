import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { workItems } from '../data/workItems.js';
import { ANABEEB_URL } from '../data/testimonials.js';

export default function Work() {
  const { t, pick } = useLanguage();
  const [ref, inView] = useReveal();

  return (
    <section className="section soft-bg" id="work">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">04</span>
          <h2>{t('work_heading_1')} <span>{t('work_heading_2')}</span></h2>
          <p>
            {t('work_copy_prefix')}
            <a href={ANABEEB_URL} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>Anabeeb</a>
            {t('work_copy_suffix')}
          </p>
        </div>

        <div className="work-grid">
          {workItems.map((item, i) => (
            <div className="work-card" key={i}>
              <div className="work-icon"><i className={`bi ${item.icon}`}></i></div>
              <h4>{pick(item.title)}</h4>
              <p>{pick(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
