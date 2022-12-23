import { useAppDispatch, useAppSelector } from "app/hooks";
import { homeSelector } from "app/selectors";
import WrapperContainer from "components/WrapperContainer";
import React, { useEffect, useState } from "react";
import Newspaper from "../../components/Newspaper";
import {
  getNews,
  handleMaxPage,
  handlePage,
  handleResetNews,
} from "./homePageSlice";
import { IPagination } from "pages/interface";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { newsData, currentPage, isMaxPage } = useAppSelector(homeSelector);
  const { ref, inView } = useInView({
    threshold: 0.7,
    initialInView: false,
    delay: 100,
  });
  const [isLocalLoading, setIsLocalLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (!isMaxPage) {
        setIsLocalLoading(true);
        setTimeout(() => {
          const newsParams: IPagination = {
            Filters: "",
            Sorts: "",
            Page: currentPage,
            PageSize: 10,
          };
          const fetchData = async () => {
            const res: any = await dispatch(getNews(newsParams)).unwrap();

            if (res.data.collection.length === 0) {
              dispatch(handleMaxPage());
            }
          };

          fetchData();
          setIsLocalLoading(false);
        }, 1000);
      }
    } catch (err) {
      console.error("ERROR: ", err);
      setIsLocalLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (inView && !isMaxPage) {
      dispatch(handlePage(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isMaxPage]);

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
