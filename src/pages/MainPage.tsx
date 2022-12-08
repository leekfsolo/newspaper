import { handleLoading } from "app/globalSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { globalSelector, homeSelector } from "app/selectors";
import Loading from "components/Loading";
import WrapperContainer from "components/WrapperContainer";
import React, { useEffect } from "react";
import Newspaper from "../components/Newspaper";
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
    <main className="py-3">
      <Loading isOpen={isLoading} />
      <WrapperContainer>
        <div className="newspaper-list row">
          {newsData.map((newspaper) => (
            <div className="col-4" key={newspaper.id}>
              <Newspaper data={newspaper} />
            </div>
          ))}
        </div>
      </WrapperContainer>
    </main>
  );
};

export default MainPage;
