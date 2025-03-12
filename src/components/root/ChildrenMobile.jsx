import React from "react";
import ComponentChildrenImproveMob from "../componentChildrenImproveMobile/componentChildrenImproveMob";
import ComponentChildrenImproveCard from "../componentChildrenImproveMobile/componentChildrenImproveCard";
import ComponentChildrenImproveExplain from "../componentChildrenImproveMobile/componentChildrenImproveExplain";
import ComponentChildrenImproveInitialsMobile from "../componentChildrenImproveMobile/componentChildrenImproveInitialsMobile";
import Footer from "../footer/footer";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";

const ChildrenMobile = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ComponentChildrenImproveMob />
      <ComponentChildrenImproveCard />
      <ComponentChildrenImproveExplain />
      <ComponentChildrenImproveInitialsMobile />
      <Footer />
    </div>
  );
};

export default ChildrenMobile;
