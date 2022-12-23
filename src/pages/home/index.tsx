import { useAppDispatch, useAppSelector } from "app/hooks";
import { homeSelector } from "app/selectors";
import WrapperContainer from "components/WrapperContainer";
import React, { useEffect, useState } from "react";
import Newspaper from "../../components/Newspaper";
import { getNews, handleResetNews } from "./homePageSlice";
import { IPagination } from "pages/interface";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { newsData } = useAppSelector(homeSelector);
  const { ref, inView } = useInView({
    threshold: 0.7,
    initialInView: false,
    delay: 100,
  });
  const [page, setPage] = useState<number>(1);
  const [isLocalLoading, setIsLocalLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLocalLoading(true);
      setTimeout(() => {
        const newsParams: IPagination = {
          Filters: "",
          Sorts: "",
          Page: page,
          PageSize: 10,
        };
        const fetchData = async () => {
          await dispatch(getNews(newsParams));
        };

        fetchData();
        setIsLocalLoading(false);
      }, 1000);
    } catch (err) {
      console.error("ERROR: ", err);
      setIsLocalLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  useEffect(() => {
    dispatch(handleResetNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="homePage">
      <WrapperContainer>
        <div className="homePage-title">
          <h1>Tin mới nhất</h1>
        </div>
        <div className="homePage-list row">
          {newsData.map((newspaper, idx) => (
            <div
              className={`${idx === 0 ? "col-12" : "col-lg-4 col-sm-6 col-12"}`}
              key={newspaper.id}
            >
              <Newspaper data={newspaper} firstNews={idx === 0} />
            </div>
          ))}
        </div>

        {newsData.length > 0 && (
          <div
            className="homePage-load d-flex justify-content-center"
            ref={ref}
          >
            {isLocalLoading && <CircularProgress />}
          </div>
        )}
      </WrapperContainer>
    </main>
  );
};

export default HomePage;
