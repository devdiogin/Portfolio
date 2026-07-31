import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function ProjectGrid() {
  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section aria-label="Projetos">
      <p className="section-label">PROJECTS</p>
      <div className="project-grid">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
