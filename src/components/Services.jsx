import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { useCounter } from '../hooks/useCounter.js';
import { stats } from '../data/certifications.js';

function StatItem({ stat, active }) {
  const { pick } = useLanguage();
  const value = useCounter(stat.target, active);
  const [line1, line2] = pick(stat.label).split('|');

  return (
    <div className="stat">
      <span className="count">{value}{stat.suffix}</span>
      <small>{line1}<br />{line2}</small>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();
  const [statsRef, statsIn] = useReveal();

  const serviceList = [
    { titleKey: 'services_web_design', descKey: 'services_web_design_desc' },
    { titleKey: 'services_web_dev', descKey: 'services_web_dev_desc' },
    { titleKey: 'services_uiux', descKey: 'services_uiux_desc' },
    { titleKey: 'services_creative', descKey: 'services_creative_desc' }
  ];

  return (
    <section className="section" id="services">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="services-intro">
          <span className="section-num">01</span>
          <h2>{t('services_heading_1')} <span>{t('services_heading_2')}</span></h2>
          <p>{t('services_copy')}</p>
          <a href="#projects" className="btn btn-primary">{t('services_view_all')}</a>
        </div>

        <div className="services-list">
          {serviceList.map((s, i) => (
            <div className="service-row" key={s.titleKey}>
              <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{t(s.titleKey)}</h4>
                <p>{t(s.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`container stats-bar ${statsIn ? 'in-view' : ''}`} ref={statsRef}>
        {stats.map((stat, i) => (
          <StatItem stat={stat} active={statsIn} key={i} />
        ))}
      </div>
    </section>
  );
}
