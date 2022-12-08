import { ICategory } from "components/interface";

export interface INewspaper {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  content: string;
  categorylink: string;
  categorylinkNavigation: ICategory;
}
