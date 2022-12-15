import { handleLoading } from "app/globalSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { newsDetailSelector } from "app/selectors";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { purifyHTML } from "utils/helpers/purifyHTML";
import { getNewsDetail } from "./newsDetailSlice";

const NewsDetail = () => {
  const dispatch = useAppDispatch();
  const { newsDetail } = useAppSelector(newsDetailSelector);
  const { id } = useParams();

  console.log(newsDetail);

  useEffect(() => {
    dispatch(handleLoading(true));

    try {
      if (id) {
        const fetchData = async () => {
          await dispatch(getNewsDetail(id));
        };

        fetchData();
      }
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      dispatch(handleLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {newsDetail ? (
        <div
          className="news-detail container py-4"
          dangerouslySetInnerHTML={{
            __html: purifyHTML(newsDetail.newspaperContent.content),
          }}
        ></div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NewsDetail;
