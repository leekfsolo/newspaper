import { useAppSelector } from "app/hooks";
import Loading from "components/Loading";
import React from "react";
import Newspaper from "../components/Newspaper";
import { INewspaper } from "../utils/interface";

const newspapers: Array<INewspaper> = [
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
  {
    img: "https://cdn.tuoitre.vn/zoom/504_315/2022/10/24/nova-1-1666595567101786912310-crop-16665957294551455548631.jpeg",
    label: "Novaland: Tin đồn và văn bản 'cầu cứu' trên mạng là bịa đặt",
    description:
      "TTO - Ngày 24-10, Novaland đã chính thức thông tin về các tin đồn những ngày qua liên quan đến các dự án của doanh nghiệp này. Phía Novaland khẳng...",
  },
];

const MainPage = () => {
  const { isLoading } = useAppSelector((state) => state.global);

  return (
    <main className="container py-3">
      <Loading isOpen={isLoading} />
      {newspapers.map((newspaper, idx) => (
        <Newspaper key={`newspaper-${idx}`} data={newspaper} />
      ))}
    </main>
  );
};

export default MainPage;
