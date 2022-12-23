import { PageUrl } from "configuration/enum";
import moment from "moment";
import { INewspaper } from "pages/interface";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";

type Props = {
  data: INewspaper;
  firstNews?: boolean;
};

const randomTags = () => {
  const tags = ["success", "info", "secondary", "warning"];
  const idx = Math.floor(Math.random() * tags.length);
  return tags[idx];
};

const Newspaper = (props: Props) => {
  const { data, firstNews = false } = props;
  const { image, title, createdAt, categorylinkNavigation, description, id } =
    data;
  const { width } = useWindowSize();
  const { label } = categorylinkNavigation;
  const navigate = useNavigate();

  const firstNewsCases = firstNews && width >= 768;

  return (
    <div
      className={`newspaper ${firstNewsCases ? "newspaper-first" : ""}`}
      onClick={() => navigate(`${PageUrl.NEWS_ROOT}/${id}`)}
    >
      <div className="newspaper-img">
        <img src={image} alt={title} />
      </div>

      <div className="newspaper-content">
        <div className="">
          <p>{title}</p>
          <div
            className={`newspaper-content__desc mb-2 ${
              firstNews ? "firstNews" : ""
            }`}
          >
            {description}
          </div>
        </div>

        <div className="newspaper-content__footer">
          <div
            className={`newspaper-category newspaper-category__${randomTags()}`}
          >
            {label}
          </div>

          <div className="newspaper-time">
            <span>{moment(new Date(createdAt)).format("DD/MM/YYYY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
