import React from "react";
import Navbar from "../header/Navbar";
import PageTransactions from "../pageTransactions/pageTransactions";
import PageFirst from "../../pages/pageFirst";
import CimbNiaga from "../cimbNiaga/cimbNiaga";
import EatTiew from "../eatTiew/eatTiew";
import ImprovMobile from "../improvMobile/improvMobile";

import MarqueeSection from "../card/card";
import Footer from "../footer/footer";

const Index = () => {
  return (
    <div>
      <PageTransactions />
      <Navbar />
      <PageFirst />
      <CimbNiaga />
      <EatTiew />
      <ImprovMobile />
      <MarqueeSection />
      <Footer />
      {/* </PageTransactions> */}
    </div>
  );
};

export default Index;
