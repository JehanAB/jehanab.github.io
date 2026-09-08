import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { projects } from '../data/projects.js';
import ProjectTile from './ProjectTile.jsx';

export default function Projects() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();

  return (
    <section className="section" id="projects">
      <div className={`container ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="section-head">
          <span className="section-num">05</span>
          <h2>{t('projects_heading_1')} <span>{t('projects_heading_2')}</span></h2>
          <p>{t('projects_copy')}</p>
        </div>

        <div className="project-bento">
          {projects.map((project, i) => (
            <ProjectTile project={project} index={i} key={project.id} />
          ))}
        </div>

        <div className="center-btn">
          <a href="https://github.com/JehanAB?tab=repositories" target="_blank" rel="noopener" className="btn btn-primary">
            {t('projects_view_all')}
          </a>
        </div>
      </div>
    </section>
  );
}
