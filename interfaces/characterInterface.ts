import { nameUrlInterface } from "./nameUrlInterface";

export interface characterInterface {
  created?: string;
  episode?: string[],
  gender?: string;
  id: number;
  image: string;
  location: nameUrlInterface;
  name: string;
  origin?: nameUrlInterface;
  species: string;
  status: string;
  type?: string;
}
