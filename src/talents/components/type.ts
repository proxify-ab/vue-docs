export interface TalentExperience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
  skills: string[];
}

export interface TalentEducation {
  id: number;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export interface TalentCompensations {
  partTime: string;
  monthly: string;
}


export interface TalentProfile {
  id: number;
  name: string;
  image?: string;
  intro: string;
  description: string[];
  proficiencies: string[];
  compensations: TalentCompensations;
  location: string;
  timezone: string;
  candidateProfile?: string;
  experiences?: TalentExperience[];
  education?: TalentEducation[];
  highlighted?: boolean;
}

export interface TalentProfiles extends Array<TalentProfile> {
}
