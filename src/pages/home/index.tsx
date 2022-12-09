import { handleLoading } from "app/globalSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { homeSelector } from "app/selectors";
import WrapperContainer from "components/WrapperContainer";
import React, { useEffect } from "react";
import Newspaper from "../../components/Newspaper";
import { getNews } from "./homePageSlice";
import { Button } from "@mui/material";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { newsData } = useAppSelector(homeSelector);

  useEffect(() => {
    dispatch(handleLoading(true));
    try {
      const fetchData = async () => {
        await dispatch(getNews());
      };

      fetchData();
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      dispatch(handleLoading(false));
    }
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
            <div className={`col-${idx === 0 ? 12 : 4}`} key={newspaper.id}>
              <Newspaper data={newspaper} firstNews={idx === 0} />
            </div>
          ))}
        </div>

        <div className="homePage-load d-flex justify-content-center">
          <Button variant="outlined" color="primary">
            Xem Thêm
          </Button>
        </div>
      </WrapperContainer>
    </main>
  );
};

export default HomePage;
