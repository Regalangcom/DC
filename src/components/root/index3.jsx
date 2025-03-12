import React from "react";
import ImageSlider from "../componentAbout/imageSlider";
import PagesAbout from "../../pages/pageAbout";
import OurService from "../componentAbout/ourService";
import MarqueeSection from "../card/card";
import Footer from "../footer/footer";
import PageTransactions from "../pageTransactions/pageTransactions";
import Navbar from "../header/Navbar";

const Index3 = () => {
  return (
    <div className="md:mt-20 mt-20">
      <PageTransactions />
      <Navbar />
      <PagesAbout />
      <ImageSlider />
      <OurService />
      <MarqueeSection />
      <Footer />
    </div>
  );
};

export default Index3;
