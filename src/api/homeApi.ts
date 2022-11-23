import axiosClient from "./axiosClient";

const homeApi = {
  getNews: () => {
    const url = "/api/news";
    return axiosClient.get(url);
  },
};

export default homeApi;
