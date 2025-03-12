import React from "react";
import ComponentChildrenWorkEatiew from "../componentChildrenWorkEatiew /componentChildrenWorkEatiew";
import ComponentChildrenWorkEatiewCard from "../componentChildrenWorkEatiew /componentChildrenWorkEatiewCard";
import ComponentChildrenWorkEatiewExplain from "../componentChildrenWorkEatiew /componentChildrenWorkEatiewExplain";
import ComponentChildrenWorkEatiewInitials from "../componentChildrenWorkEatiew /componentChildrenWorkEatiewInitials";
import PageTransactions from "../pageTransactions/pageTransactions";
import Navbar from "../header/Navbar";
import Footer from "../footer/footer";

const ChildrenWorkEatiew = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ComponentChildrenWorkEatiew />
      <ComponentChildrenWorkEatiewCard />
      <ComponentChildrenWorkEatiewExplain />
      <ComponentChildrenWorkEatiewInitials />
      <Footer />
    </div>
  );
};

export default ChildrenWorkEatiew;
