import { INewspaper } from "pages/interface";
import React from "react";

type Props = {
  data: INewspaper;
};

const Newspaper = (props: Props) => {
  const { data } = props;
  const { description, image, title, createdAt } = data;

  return (
    <div className="newspaper">
      <div className="row flex-nowrap newspaper-article">
        <div className="col-12 col-lg-7">
          <img src={image} alt="poster" className="newspaper-article__img" />
        </div>

        <div className="col">
          <div className="newspaper-article__content">
            <small>{createdAt}</small>
            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="newspaper-divider"></div>
    </div>
  );
};

export default Newspaper;
