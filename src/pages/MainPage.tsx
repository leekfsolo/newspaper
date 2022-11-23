import { handleLoading } from "app/globalSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { globalSelector, homeSelector } from "app/selectors";
import Loading from "components/Loading";
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
    <main className="container py-3">
      <Loading isOpen={isLoading} />
      {newsData.map((newspaper) => (
        <Newspaper key={newspaper.id} data={newspaper} />
      ))}
    </main>
  );
};

export default MainPage;
