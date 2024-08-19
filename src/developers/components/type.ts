export interface DeveloperExperience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
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
  image?: string;
  intro: string;
  description: string[];
  proficiencies: string[];
  compensations: DeveloperCompensations;
  location: string;
  timezone: string;
  candidateProfile?: string;
  experiences?: DeveloperExperience[];
  education?: DeveloperEducation[];
  highlighted?: boolean;
}

export interface DeveloperProfiles extends Array<DeveloperProfile> {
}
