import Loading from "components/Loading";
import MainLayout from "components/MainLayout";
import { PageUrl } from "configuration/enum";
import HomePage from "pages/home";
import NewsDetail from "pages/NewsDetail";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Loading />
      <Routes>
        <Route path={PageUrl.ROOT} element={<MainLayout />}>
          <Route path={PageUrl.HOMEPAGE} element={<HomePage />} />
          <Route path={PageUrl.NEWS_DETAIL} element={<NewsDetail />} />
          <Route
            path={PageUrl.ALL}
            element={<Navigate to={PageUrl.HOMEPAGE} replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
