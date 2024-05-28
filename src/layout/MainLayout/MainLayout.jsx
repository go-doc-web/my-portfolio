import React from "react";
import Header from "../../components/Header";

import css from "./MainLayout.module.css";

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <main className={css.main}>{children}</main>
    {/* <Footer /> */}
  </div>
);

export default MainLayout;
