import React from "react";
import ChildrenCmib from "../componentChildren/childrenCmib";
import CardChildren from "../componentChildren/childrenCard";
import ChildrenExplain from "../componentChildren/childrenExplain";
import ChildrenInitialsCMB from "../componentChildren/childrenInitialsCMB";
import Footer from "../footer/footer";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";

const ChildrenFirst = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ChildrenCmib />
      <CardChildren />
      <ChildrenExplain />
      <ChildrenInitialsCMB />
      <Footer />
    </div>
  );
};

export default ChildrenFirst;
