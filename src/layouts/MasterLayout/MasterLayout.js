import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MasterLayout = () => {
  return (
    <>
      <Header />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      <Footer />
    </>
  );
};

export default MasterLayout;
