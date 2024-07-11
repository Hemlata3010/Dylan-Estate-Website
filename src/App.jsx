import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BuyersrentersDashboard from "./pages/BuyersrentersDashboard";
import Preview from "./pages/Preview";
import Page from "./pages/Page";
import SellersFlowPropertyDetail from "./pages/SellersFlowPropertyDetail";
import SellersFlowLOCATIONDetail from "./pages/SellersFlowLOCATIONDetail";
import SellersFlowPropertyFeatures from "./pages/SellersFlowPropertyFeatures";
import SellersFlowPriceDetails from "./pages/SellersFlowPriceDetails";
import SellersPhotoDetails from "./pages/SellersPhotoDetails";
import SellersPhotoDetails1 from "./pages/SellersPhotoDetails1";
import Frame from "./pages/Frame";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/preview":
        title = "";
        metaDescription = "";
        break;
      case "/page-3":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-location-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-features-and-amenities":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-price-details":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-photo-details":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-photo-details2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-686":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BuyersrentersDashboard />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/page-3" element={<Page />} />
      <Route
        path="/sellers-flow-property-detail"
        element={<SellersFlowPropertyDetail />}
      />
      <Route
        path="/sellers-flow-location-detail"
        element={<SellersFlowLOCATIONDetail />}
      />
      <Route
        path="/sellers-flow-property-features-and-amenities"
        element={<SellersFlowPropertyFeatures />}
      />
      <Route
        path="/sellers-flow-price-details"
        element={<SellersFlowPriceDetails />}
      />
      <Route path="/sellers-photo-details" element={<SellersPhotoDetails />} />
      <Route
        path="/sellers-photo-details2"
        element={<SellersPhotoDetails1 />}
      />
      <Route path="/frame-686" element={<Frame />} />
    </Routes>
  );
}
export default App;
