export interface Job {
  image: string;
  title: string;
  company: string;
  time: string;
  funcions: string[];
}

export interface Skills {
  image: JSX.Element;
  name: string;
  time: string;
}

export interface Projects {
  name: string;
  link: string;
  tech: JSX.Element[];
  description: string;
}
