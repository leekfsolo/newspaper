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
  content: string;
}

export interface IPagination {
  Filters: string;
  Sorts: string;
  PageSize: number;
  Page: number;
}
