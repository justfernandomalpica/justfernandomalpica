export type CVData = {
  info: {
    title: string;
    birthDate: string;
    phone: string;
    email: string;
    address: string;
    languages: string[];
  };
  profile: string;
  skills: Record<string, string[]>;
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
    responsibilities: string[];
    achievements: string;
  }[];
  education: {
    university: string;
    faculty: string;
    title: string;
    period: string;
    description: string;
  }[];
};
