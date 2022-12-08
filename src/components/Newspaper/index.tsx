import moment from "moment";
import { INewspaper } from "pages/interface";
import React from "react";

type Props = {
  data: INewspaper;
};

const Newspaper = (props: Props) => {
  const { data } = props;
  const { image, title, createdAt, categorylinkNavigation } = data;
  const { label } = categorylinkNavigation;

  return (
    <div className="newspaper">
      <div className="newspaper-img">
        <img src={image} alt={title} />
      </div>

      <div className="newspaper-content">
        <p>{title}</p>
        <div className="newspaper-content__footer">
          <div className="newspaper-category">{label}</div>

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
