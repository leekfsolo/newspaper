import { IPagination } from "pages/interface";
import axiosClient from "./axiosClient";

const newsApi = {
  getNews: (params: IPagination) => {
    const url = "/api/news";
    return axiosClient.get(url, { params });
  },
  getNewsDetail: (id: string) => {
    const url = `/api/news/${id}`;
    return axiosClient.get(url);
  },
};

export default newsApi;
