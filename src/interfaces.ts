import { StaticImageData } from "next/image";

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
