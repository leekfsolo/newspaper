import moment from "moment";
import { INewspaper } from "pages/interface";
import React from "react";

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
  const { image, title, createdAt, categorylinkNavigation, description } = data;
  const { label } = categorylinkNavigation;

  return (
    <div className={`newspaper ${firstNews ? "newspaper-first" : ""}`}>
      <div className="newspaper-img">
        <img src={image} alt={title} />
      </div>

      <div className="newspaper-content">
        <div className="">
          <p>{title}</p>
          {firstNews && (
            <div className="newspaper-content__desc">{description}</div>
          )}
        </div>

        <div className="newspaper-content__footer">
          <div
            className={`newspaper-category newspaper-category__${randomTags()}`}
          >
            {label}
          </div>

          <div className="newspaper-time">
            <span>
              {moment(createdAt, "DD/MM/YYYY hh:mm").format("DD/MM/YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
