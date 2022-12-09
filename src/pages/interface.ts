import { ICategory } from "components/interface";

export interface INewspaper {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  categorylink: string;
  categorylinkNavigation: ICategory;
  newspaperContent: INewspaperContent;
}

export interface INewspaperContent {
  id: string;
  content: string;
}
