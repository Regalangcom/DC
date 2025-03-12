import React from "react";
import ComponentChildrenWorkMicrositeCard from "../componentChildrenWorkMicrosite/componentChildrenWorkMicrositeCard";
import ComponentChildrenWorkMicrosite from "../componentChildrenWorkMicrosite/componentChildrenWorkMicrosite";
import ComponentChildrenWorkMicrositeExplain from "../componentChildrenWorkMicrosite/componentChildrenWorkMicrositeExplain";
import ComponentChildrenWorkMicrositeInitials from "../componentChildrenWorkMicrosite/componentChildrenWorkMicrositeInitials";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";
import Footer from "../footer/footer";

const ChildrenMicro = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <ComponentChildrenWorkMicrosite />
      <ComponentChildrenWorkMicrositeCard />
      <ComponentChildrenWorkMicrositeExplain />
      <ComponentChildrenWorkMicrositeInitials />
      <Footer />
    </div>
  );
};

export default ChildrenMicro;
