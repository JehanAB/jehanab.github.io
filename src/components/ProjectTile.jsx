import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useTilt } from '../hooks/useTilt.js';

const POSTER_PAIRS = [
  ['var(--blue)', 'var(--teal)'],
  ['var(--orange)', 'var(--blue)'],
  ['var(--blue-dark)', 'var(--orange-light)'],
  ['var(--teal)', 'var(--orange)']
];

export default function ProjectTile({ project, index }) {
  const { t, pick } = useLanguage();
  const [from, to] = POSTER_PAIRS[index % POSTER_PAIRS.length];
  const tiltRef = useTilt(4);

  function handleImgError(e) {
    e.target.style.display = 'none';
  }

  return (
    <article className={`project-tile size-${project.size}`}>
      <div
        className="project-tile-media"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        ref={project.size !== 'sm' ? tiltRef : undefined}
      >
        <span className="project-tile-initial">{pick(project.title).charAt(0)}</span>
        <img
          src={project.image || project.gif}
          alt={project.imageAlt}
          loading="lazy"
          onError={handleImgError}
        />
      </div>
      <div className="project-tile-body">
        <h4>{pick(project.title)}</h4>
        <p>{pick(project.description)}</p>
        <div className="project-tile-meta">
          <div className="tags">
            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-links">
            {project.live && <a href={project.live} target="_blank" rel="noopener">{t('projects_live_demo')}</a>}
            <a href={project.github} target="_blank" rel="noopener">{t('projects_view_github')}</a>
          </div>
        </div>
      </div>
    </article>
  );
}
