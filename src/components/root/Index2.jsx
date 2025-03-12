import React from "react";
import PagesWork from "../../pages/pagesWork";
import Card from "../componentsWork/Card";
import Navbar from "../header/Navbar";
import Footer from "../footer/footer";
import PageTransactions from "../pageTransactions/pageTransactions";

const Index2 = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <PagesWork />
      <Card />
      <Footer />
      {/* </PageTransactions> */}
    </div>
  );
};

export default Index2;
