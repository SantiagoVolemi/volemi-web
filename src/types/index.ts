export interface University {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  content: string;
  avatar?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}