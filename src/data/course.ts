import courseJson from "./course.json";

export type ResourceKind = "markdown" | "slides" | "pdf" | "html" | "code" | "asset" | "video" | "link";

export type ResourceStatus = "indexed" | "legacy-html" | "available" | "needs-review" | "planned";

export type CourseResource = {
  title: string;
  label?: string;
  kind: ResourceKind;
  source: string;
  status: ResourceStatus;
};

export type SlideResources = {
  web?: CourseResource;
  pdf?: CourseResource;
};

export type CourseResourceGroup = {
  title: string;
  summary?: string;
  resources: CourseResource[];
};

export type CourseUnit = {
  id: string;
  title: string;
  summary: string;
  kind?: string;
  layout?: "normal" | "wide" | "asset-grid" | "notice" | "coming-soon";
  slides?: SlideResources;
  videos?: CourseResource[];
  extras?: CourseResource[];
  resourceGroups?: CourseResourceGroup[];
};

export type CourseSection = {
  title: string;
  eyebrow?: string;
  description?: string;
  variant?: "normal" | "project" | "notice" | "coming-soon";
  units?: CourseUnit[];
  groups?: CourseSection[];
};

export type CourseTerm = {
  id: string;
  label: string;
  status: string;
  description?: string;
  sections?: CourseSection[];
};

export type Course = {
  code: string;
  title: string;
  credits: string;
  hours: string;
  instructor: string;
  instructorUrl?: string;
  description: string;
  defaultTermId?: string;
  terms: CourseTerm[];
};

export const course = courseJson as Course;
