import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function AboutMe() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();

  const facts = [
    { labelKey: 'about_fact_1_label', valueKey: 'about_fact_1_value' },
    { labelKey: 'about_fact_2_label', valueKey: 'about_fact_2_value' },
    { labelKey: 'about_fact_3_label', valueKey: 'about_fact_3_value' }
  ];

  return (
    <section className="section about-section">
      <div className={`container about-container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">03</span>
          <h2>{t('about_heading_1')} <span>{t('about_heading_2')}</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-body">
            <span className="about-quote-mark">“</span>
            <p>{t('about_p2')}</p>
            <p>{t('about_p3')}</p>
            
          </div>

          <aside className="about-facts">
            {facts.map(f => (
              <div className="about-fact" key={f.labelKey}>
                <span className="about-fact-label">{t(f.labelKey)}</span>
                <span className="about-fact-value">{t(f.valueKey)}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
