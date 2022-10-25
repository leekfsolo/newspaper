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
  return (
    <main className="container">
      {newspapers.map((newspaper) => (
        <Newspaper key={newspaper.label} data={newspaper} />
      ))}
    </main>
  );
};

export default MainPage;