// eslint-disable-next-line no-unused-vars
import Index from "./components/root/index.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Index2 from "./components/root/Index2";
import Index3 from "./components/root/index3";
import ChildrenFirst from "./components/root/childrenFirst.jsx";
import ChildrenEatiewRoot from "./components/root/ChildrenEatiew.jsx";
import ChildrenMobile from "./components/root/ChildrenMobile.jsx";
import ChildrenChoco from "./components/root/ChildrenChoco.jsx";
import ChildrenEatiew from "./components/componentChildrenEatiew/componentChildrenEatiew.jsx";
import ChildrenMicro from "./components/root/ChildrenMicro.jsx";
import ChildrenHarvestRoot from "./components/root/ChildrenHarvest.jsx";
import ChildrenWorkEatiew from "./components/root/ChildrenWorkEatiew.jsx";
import { useEffect } from "react";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/works" element={<Index2 />} />
        <Route path="/about" element={<Index3 />} />

        <Route path="/octo-mobile-campaign" element={<ChildrenFirst />} />
        <Route path="/works/octo-mobile-campaign" element={<ChildrenFirst />} />

        <Route path="/harvest-dental" element={<ChildrenEatiewRoot />} />
        <Route path="/works/harvest-dental" element={<ChildrenHarvestRoot />} />

        <Route path="/octo-merchant" element={<ChildrenMobile />} />
        <Route path="/works/octo-merchant" element={<ChildrenMobile />} />
        <Route path="/works/venchi-id" element={<ChildrenChoco />} />
        <Route path="/works/eattiew" element={<ChildrenWorkEatiew />} />
        <Route path="/works/branchless-microsite" element={<ChildrenMicro />} />
      </Routes>
    </>
  );
}

export default App;
