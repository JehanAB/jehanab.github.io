import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { useTimelineProgress } from '../hooks/useTimelineProgress.js';
import { timeline, ANABEEB_URL } from '../data/testimonials.js';

function TimelineItem({ item }) {
  const { pick } = useLanguage();
  const itemRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`timeline-item timeline-${item.side} ${inView ? 'in-view' : ''}`}
      ref={itemRef}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>{pick(item.title)}</h4>
        <span className="timeline-meta">{pick(item.org)}</span>
        <p>{pick(item.description)}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();
  const { containerRef, pct } = useTimelineProgress();

  return (
    <section className="section soft-bg section-compact" id="experience">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">06</span>
          <h2>{t('experience_heading_1')} <span>{t('experience_heading_2')}</span></h2>
          <p>
            {t('experience_copy_prefix')}
            <a href={ANABEEB_URL} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>Anabeeb</a>
            {t('experience_copy_suffix')}
          </p>
        </div>

        <div className="timeline" ref={containerRef}>
          <div className="timeline-progress-line" style={{ height: `${pct}%` }}></div>
          {timeline.map((item, i) => (
            <TimelineItem item={item} key={i} />
          ))}
        </div>

        <div className="cv-prompt">
          <a href="/Jehan-AlBuainain-CV.pdf" download className="cv-btn">
            <i className="bi bi-file-earmark-arrow-down"></i> {t('cv_button_label')}
          </a>
        </div>
      </div>
    </section>
  );
}
