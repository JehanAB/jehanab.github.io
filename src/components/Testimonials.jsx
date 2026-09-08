import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  const { t, pick } = useLanguage();
  const [ref, inView] = useReveal();

  return (
    <section className="section" id="testimonials">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">07</span>
          <h2>{t('testimonials_heading_1')} <span>{t('testimonials_heading_2')}</span></h2>
          <p>{t('testimonials_copy')}</p>
        </div>

        <div className="quote-list">
          {testimonials.map((item, i) => (
            <figure className="quote-item" key={i}>
              <span className="quote-icon">“</span>
              <blockquote>{pick(item.quote)}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{pick(item.role)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
