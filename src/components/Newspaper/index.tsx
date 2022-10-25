import React from "react";
import { INewspaper } from "../../utils/interface";

type Props = {
  data: INewspaper;
};

const Newspaper = (props: Props) => {
  const { data } = props;
  const { description, img, label } = data;

  return (
    <div className="newspaper mt-4">
      <div className="row flex-nowrap">
        <div className="col-7">
          <img src={img} alt="poster" className="newspaper-img" />
        </div>

        <div className="col">
          <div className="newspaper-content">
            <h6>{label}</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="newspaper-divider"></div>
    </div>
  );
};

export default Newspaper;
