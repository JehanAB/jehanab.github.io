import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { techStack } from '../data/techStack.js';

function TechItem({ tech }) {
  return (
    <span className="tech-flow-item">
      <i className={tech.icon}></i>
      <span>{tech.name}</span>
    </span>
  );
}

export default function TechStack() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();

  const mid = Math.ceil(techStack.length / 2);
  const rowA = techStack.slice(0, mid);
  const rowB = techStack.slice(mid);

  return (
    <section className="section soft-bg" id="tech-stack">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">02</span>
          <h2> {t('techstack_heading_1')} <span>{t('techstack_heading_2')}</span></h2>
        </div>
      </div>

      <div className="tech-marquee">
        <div className="tech-marquee-track tech-marquee-track-forward">
          {rowA.map(tech => <TechItem tech={tech} key={`a1-${tech.name}`} />)}
          {rowA.map(tech => <TechItem tech={tech} key={`a2-${tech.name}`} />)}
        </div>
      </div>
      <div className="tech-marquee">
        <div className="tech-marquee-track tech-marquee-track-reverse">
          {rowB.map(tech => <TechItem tech={tech} key={`b1-${tech.name}`} />)}
          {rowB.map(tech => <TechItem tech={tech} key={`b2-${tech.name}`} />)}
        </div>
      </div>
    </section>
  );
}
