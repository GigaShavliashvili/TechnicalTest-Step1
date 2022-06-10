import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, User, NotFound } from "./Page";
import { ROUTES } from "./Config/Router";
import { Header } from "./Components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} exact element={<Home />} />
          <Route path={ROUTES.USER} element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
