import MainPage from "pages/Main/MainPage";
import ProductDetailPage from "pages/ProductDetail/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
