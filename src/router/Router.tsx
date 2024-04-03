import MainPage from "pages/Main/MainPage";
import ProductDetailPage from "pages/ProductDetail/ProductDetailPage";
import ProductSearchPage from "pages/ProductSearch/ProductSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search/:text" element={<ProductSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
