import { IconExternalLink } from './Icons';

export function ProjectCard({ project }) {
  const { title, description, stack = [], repoUrl, deployUrl, featured } = project;

  // Primary link: prefer deploy, fallback to repo
  const primaryLink = deployUrl || repoUrl;

  return (
    <article className="project-card" data-featured={featured ? 'true' : undefined}>
      {/* Title row */}
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${title}`}
            className="card-link-icon"
          >
            <IconExternalLink size={15} />
          </a>
        )}
      </div>

      {/* Stack tags */}
      {stack.length > 0 && (
        <div className="tag-row">
          {stack.map((tech) => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="card-desc">{description}</p>
    </article>
  );
}
