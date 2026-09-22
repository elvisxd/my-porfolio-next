export type ProjectStatus = "Completed" | "In Progress" | "Beta" | "Archived";

export interface ProjectTechnology {
  name: string;
  color?: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  imageSrc: string;
  /** Intrinsic size of the image, so the card reserves the right box. Without
   *  them the card assumes 16:9 and crops to it. */
  imageWidth?: number;
  imageHeight?: number;
  technologies: ProjectTechnology[];
  liveLink?: string;
  codeLink?: string;
  status?: ProjectStatus;
  featured?: boolean;
  createdAt: string;
}

export interface ProjectsProps {
  className?: string;
  id?: string;
}
