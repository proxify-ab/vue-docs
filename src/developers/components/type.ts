export interface ParagraphDescription {
  type: 'p';
  content: string;
}

export interface UnorderedListDescription {
  type: 'ul';
  content: string[];
}

export type DeveloperExperienceDescription = ParagraphDescription | UnorderedListDescription;

export interface DeveloperExperience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  period: string;
  description: DeveloperExperienceDescription[];
  skills: string[];
}

export interface DeveloperEducation {
  id: number;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export interface DeveloperCompensations {
  partTime: string;
  monthly: string;
}

export interface DeveloperProfile {
  id: number;
  name: string;
  alias: string;
  image?: string;
  description: string[];
  proficiencies: string[];
  compensations: DeveloperCompensations;
  location: string;
  region: string;
  experiences?: DeveloperExperience[];
  education?: DeveloperEducation[];
  highlighted?: boolean;
}

export interface DeveloperProfiles extends Array<DeveloperProfile> {
}