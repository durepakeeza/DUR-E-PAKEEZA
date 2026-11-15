import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem } from '../data/resume';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E10]/85 p-4 sm:p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-[#27272B] bg-[#141417] text-[#FAF8F5]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project preview"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#27272B] bg-[#0E0E10]/90 text-[#FAF8F5] transition-colors duration-150 hover:border-[#C8A96A] hover:text-[#C8A96A]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#27272B] bg-[#0E0E10]">
              {!imageError ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <span className="font-display text-3xl text-[#C8A96A]">
                    {project.index}
                  </span>
                  <span className="mt-2 text-sm text-[#A8A29A]">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-[12px] font-medium tracking-[0.14em] text-[#C8A96A] uppercase tabular-nums">
                  Project {project.index}
                </p>
                <h3
                  id="project-modal-title"
                  className="font-display text-[30px] sm:text-[34px] font-medium leading-tight text-[#FAF8F5]"
                >
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 text-[13px] text-[#A8A29A]">
                  {project.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-2.5">
                      <span>{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-[#4F4F57]">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-[#27272B] pt-5">
                {project.details.map((line) => (
                  <p
                    key={line}
                    className="text-[15px] leading-[1.7] text-[#D0CBC2]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap items-center gap-3 border-t border-[#27272B] pt-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#C8A96A] px-5 py-2.5 text-[13px] font-semibold text-[#0E0E10] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#D7BA80]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-[#3A3A40] px-5 py-2.5 text-[13px] font-medium text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#C8A96A] hover:text-[#C8A96A]"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
