import { ArrowUpRight, Lock } from "lucide-react";
import type { Content, Project } from "@/content/site";
import VideoButton from "./VideoButton";

const textLink = "inline-flex items-center gap-1.5 transition-colors hover:text-signal";
const actionLink =
  "inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-medium text-bg transition-colors hover:bg-ink";

export default function ProjectLinks({ project, t }: { project: Project; t: Content["projects"] }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        {project.live && (
          <a href={project.live.href} target="_blank" rel="noreferrer" className={actionLink}>
            <ArrowUpRight size={15} aria-hidden />
            {project.live.label}
          </a>
        )}
        {project.video && (
          <VideoButton
            src={project.video}
            title={project.name}
            label={t.viewDemo}
            closeLabel={t.closeVideo}
            className={actionLink}
          />
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className={textLink}>
            <ArrowUpRight size={15} aria-hidden />
            {t.viewCode}
          </a>
        )}
        {project.codeNote && (
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Lock size={14} aria-hidden />
            {project.codeNote}
          </span>
        )}
      </div>
    </div>
  );
}
