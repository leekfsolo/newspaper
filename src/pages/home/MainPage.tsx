import { handleLoading } from "app/globalSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { globalSelector, homeSelector } from "app/selectors";
import Loading from "components/Loading";
import WrapperContainer from "components/WrapperContainer";
import React, { useEffect } from "react";
import Newspaper from "../../components/Newspaper";
import { getNews } from "./homePageSlice";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(globalSelector);
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
    <main className="mainPage">
      <Loading isOpen={isLoading} />
      <WrapperContainer>
        <div className="mainPage-title">
          <h1>Tin mới nhất</h1>
        </div>
        <div className="mainPage-list row">
          {newsData.map((newspaper, idx) => (
            <div className={`col-${idx === 0 ? 12 : 4}`} key={newspaper.id}>
              <Newspaper data={newspaper} firstNews={idx === 0} />
            </div>
          ))}
        </div>
      </WrapperContainer>
    </main>
  );
};

export default MainPage;
