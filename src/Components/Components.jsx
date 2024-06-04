import React, { Fragment } from "react";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import MiddleCard from "./MiddleCard/MiddleCard";
import Footer from "./Footer/Footer";
import MiddleContent from "./MiddleContent/MiddleContent";

const Components = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <MiddleCard />
      <MiddleContent />
      <Footer />
    </Fragment>
  );
};

export default Components;
