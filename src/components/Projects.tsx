import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/resume';
import { Reveal } from './Reveal';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="projects"
      className="bg-[#F7F4EE] text-[#141416] border-b border-[#E2DBD0]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-[#9B7B3E] uppercase">
              Selected Projects
            </p>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.12] text-[#141416]">
              Featured Work
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-[#5C5852]">
            Responsive web applications and WordPress builds crafted for usability, clarity, and cross-device consistency.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const imgFailed = failedImages[project.id];
            return (
              <Reveal key={project.id} delay={index * 0.08} className="flex">
                <article className="group flex w-full flex-col overflow-hidden rounded-sm border border-[#E2DBD0] bg-[#FAF8F5] transition-all duration-300 hover:-translate-y-1 hover:border-[#9B7B3E]/60 hover:shadow-[0_14px_32px_rgba(20,20,22,0.08)]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Inspect ${project.title} preview`}
                    className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E2DBD0] bg-[#EFEAE0] text-left focus-visible:outline-offset-[-3px]"
                  >
                    {!imgFailed ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [project.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <span className="font-display text-3xl text-[#9B7B3E]">
                          {project.index}
                        </span>
                        <span className="mt-2 text-sm font-medium text-[#141416]">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141416]/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </button>

                  <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-[24px] font-medium leading-snug text-[#141416]">
                          <span className="mr-2 text-[#9B7B3E] tabular-nums">
                            {project.index}.
                          </span>
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-medium text-[#5C5852]">
                        {project.technologies.map((tech, idx) => (
                          <span key={tech} className="inline-flex items-center gap-2">
                            <span>{tech}</span>
                            {idx < project.technologies.length - 1 && (
                              <span aria-hidden="true" className="text-[#C5BDB0]">
                                ·
                              </span>
                            )}
                          </span>
                        ))}
                      </div>

                      <p className="text-[14px] leading-[1.65] text-[#2B2926]">
                        {project.summary}
                      </p>

                      {project.details.length > 1 && (
                        <p className="text-[13px] leading-[1.6] text-[#5C5852]">
                          {project.details[1]}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 border-t border-[#E2DBD0] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-sm bg-[#141416] px-4 py-2 text-[13px] font-medium text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#9B7B3E]"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-sm border border-[#D4CCC0] px-3.5 py-2 text-[13px] font-medium text-[#141416] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#9B7B3E] hover:text-[#9B7B3E]"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-sm border border-[#D4CCC0] px-3.5 py-2 text-[13px] font-medium text-[#141416] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#9B7B3E] hover:text-[#9B7B3E]"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
