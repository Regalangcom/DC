import React from "react";
import ChildrenEatiew from "../componentChildrenEatiew/componentChildrenEatiew";
import ComponentChildrenEatiewCard from "../componentChildrenEatiew/componentChildrenEatiewCard";
import ComponentChildrenEatiewExplain from "../componentChildrenEatiew/componentChildrenEatiewExplain";
import ComponentChildrenEatiewInitials from "../componentChildrenEatiew/componentChildrenEatiwInitials";
import Footer from "../footer/footer";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";
const ChildrenEatiewRoot = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ChildrenEatiew />
      <ComponentChildrenEatiewCard />
      <ComponentChildrenEatiewExplain />
      <ComponentChildrenEatiewInitials />
      <Footer />
    </div>
  );
};

export default ChildrenEatiewRoot;
