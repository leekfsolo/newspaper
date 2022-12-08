import axiosClient from "./axiosClient";

const newsApi = {
  getNews: () => {
    const url = "/api/news";
    return axiosClient.get(url);
  },
  getNewsDetail: (id: string) => {
    const url = `/api/news/${id}`;
    return axiosClient.get(url);
  },
};

export default newsApi;
