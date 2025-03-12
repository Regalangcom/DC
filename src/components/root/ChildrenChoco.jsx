import React from "react";
import ComponentChildrenWorkChoco from "../componentChildrenWorkChoco/componentChildrenWorkChoco";
import ComponentChildrenWorkChocoCard from "../componentChildrenWorkChoco/componentChildrenWorkChocoCard";
import ComponentChildrenWorkChocoExplain from "../componentChildrenWorkChoco/componentChildrenWorkChocoExplain";
import ComponentChildrenWorkChocoInitialsChoco from "../componentChildrenWorkChoco/componentChildrenWorkChocoInitialsChoco";
import Footer from "../footer/footer";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";

const ChildrenChoco = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ComponentChildrenWorkChoco />
      <ComponentChildrenWorkChocoCard />
      <ComponentChildrenWorkChocoExplain />
      <ComponentChildrenWorkChocoInitialsChoco />
      <Footer />
    </div>
  );
};

export default ChildrenChoco;
